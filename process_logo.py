import os
from PIL import Image, ImageOps

def process_logo():
    input_path = "public/images/logo.jpeg"
    output_path = "public/images/logo.png"
    
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        return
        
    print("Loading logo image...")
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    # Analyze colors (find dominant non-black colors)
    color_counts = {}
    for item in datas:
        r, g, b, a = item
        # Skip black/dark background colors
        if r < 45 and g < 45 and b < 45:
            continue
        color = (r, g, b)
        color_counts[color] = color_counts.get(color, 0) + 1
        
    sorted_colors = sorted(color_counts.items(), key=lambda x: x[1], reverse=True)
    print("\nDominant non-black colors in the logo:")
    for idx, (color, count) in enumerate(sorted_colors[:10]):
        print(f"Color {idx+1}: RGB{color} - Hex: #{color[0]:02x}{color[1]:02x}{color[2]:02x} (Count: {count})")
        
    # Remove black background
    # Since background is black, we can remove pixels where R, G, B are all very dark.
    # To be safe and keep anti-aliasing edges clean, we can make it a smooth alpha mask or standard threshold.
    new_data = []
    threshold = 45 # Threshold for black background detection
    
    for item in datas:
        r, g, b, a = item
        if r < threshold and g < threshold and b < threshold:
            # Make it fully transparent
            new_data.append((0, 0, 0, 0))
        else:
            new_data.append((r, g, b, a))
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"\nSuccessfully processed logo and saved transparent PNG to {output_path}")

if __name__ == "__main__":
    process_logo()

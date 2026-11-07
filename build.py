from PIL import Image
from pathlib import Path
src=Image.open('/mnt/data/a_detailed_high_quality_restaurant_website_homepa.png').convert('RGB')
out=Path('/mnt/data/bismillah-burger-house/images')
out.mkdir(exist_ok=True)
# Crops from the generated restaurant concept image; these are local assets.
crops={
 'hero-burger.jpg':(450,48,1120,350),
 'crispy-chicken.jpg':(96,490,282,571),
 'zinger-burger.jpg':(294,490,482,571),
 'double-cheese.jpg':(494,490,682,571),
 'cheese-blast.jpg':(695,490,881,571),
 'fish-fillet.jpg':(96,656,282,735),
 'special-burger.jpg':(294,656,482,735),
 'fries.jpg':(494,656,682,735),
 'nuggets.jpg':(695,656,881,735),
 'about-kitchen.jpg':(96,820,400,967),
}
for name,box in crops.items():
    im=src.crop(box)
    # Upscale small card crops for better display while preserving source detail.
    if im.width < 500:
        scale=3
        im=im.resize((im.width*scale, im.height*scale), Image.Resampling.LANCZOS)
    im.save(out/name, quality=92, optimize=True)

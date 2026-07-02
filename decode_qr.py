import cairosvg
from PIL import Image
from pyzbar.pyzbar import decode
import io

png_data = cairosvg.svg2png(url='paypal_pure.svg', scale=10.0)
img = Image.open(io.BytesIO(png_data))
result = decode(img)
for r in result:
    print(r.data.decode('utf-8'))

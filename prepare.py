import json
from pathlib import Path
x=json.load(open('/tmp/google-fonts-metadata.json'))['familyMetadataList']
fields=['family','category','stroke','classifications','subsets','fonts','axes','designers','dateAdded','lastModified','popularity','primaryScript','isOpenSource']
Path('dist/fonts.json').write_text(json.dumps({'updated':'2026-10-16','fonts':[{k:f.get(k) for k in fields} for f in x]},ensure_ascii=False,separators=(',',':')))

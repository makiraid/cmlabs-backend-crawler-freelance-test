"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9754],{33696:function(x,e,i){var n=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(e,"__esModule",{value:!0}),e.filetypeextension=e.filetypemime=e.filetypename=e.filetypeinfo=void 0;const o=n(i(78603)),t=i(2718),m=o.default();e.filetypeinfo=x=>{let e=m;for(const i of Object.keys(e.offset)){const e=t.fromHex(i);if(e>=x.length)continue;const n=m.offset[i],o=s(e,x,n);if(o.length>0)return o}return null===e.noOffset?[]:s(0,x,e.noOffset)};const s=(x,e,i)=>{let n=i,o=[];for(;;){const i=t.toHex(e[x]);if(n=n.bytes["?"]&&!n.bytes[i]?n.bytes["?"]:n.bytes[i],!n)return o;n&&n.matches&&(o=n.matches.slice(0)),x+=1}};e.default=e.filetypeinfo,e.filetypename=x=>e.filetypeinfo(x).map((x=>x.typename)),e.filetypemime=x=>e.filetypeinfo(x).map((x=>x.mime?x.mime:"")),e.filetypeextension=x=>e.filetypeinfo(x).map((x=>x.extension?x.extension:""))},78603:(x,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const n=i(2718),o=i(93321);let t=new Map,m={noOffset:null,offset:{}};const s=(x,e,i,s)=>{if(t.set(x,e),s){const t=m.offset[n.toHex(s)];if(t){const a=o.merge(o.createNode(x,e.map((x=>x.toLowerCase())),i),{...t});m.offset[n.toHex(s)]=a}else m.offset[n.toHex(s)]=o.createComplexNode(x,e.map((x=>x.toLowerCase())),i)}else null===m.noOffset?m.noOffset=o.createComplexNode(x,e.map((x=>x.toLowerCase())),i):m.noOffset=o.merge(o.createNode(x,e.map((x=>x.toLowerCase())),i),m.noOffset)};s("gif",["0x47","0x49","0x46","0x38","0x37","0x61"],{mime:"image/gif",extension:"gif"}),s("gif",["0x47","0x49","0x46","0x38","0x39","0x61"],{mime:"image/gif",extension:"gif"}),s("jpg",["0xFF","0xD8","0xFF","0xDB"],{mime:"image/jpeg",extension:"jpeg"}),s("jpg",["0xFF","0xD8","0xFF","0xE0","?","?","0x4A","0x46","0x49","0x46","0x00","0x01"],{mime:"image/jpeg",extension:"jpeg"}),s("jpg",["0xFF","0xD8","0xFF","0xE1","?","?","0x45","0x78","0x69","0x66","0x00","0x00"],{mime:"image/jpeg",extension:"jpeg"}),s("webp",["0x52","0x49","0x46","0x46","?","?","?","?","0x57","0x45","0x42","0x50"],{mime:"image/webp",extension:"webp"}),s("heif",["0x66","0x74","0x79","0x70","0x6D","0x69","0x66","0x31"],{mime:"image/heif",extension:"heif"},4),s("heif",["0x66","0x74","0x79","0x70","0x68","0x65","0x69","0x63"],{mime:"image/heif",extension:"heic"},4),s("rpm",["0xed","0xab","0xee","0xdb"]),s("bin",["0x53","0x50","0x30","0x31"],{mime:"application/octet-stream",extension:"bin"}),s("pic",["0x00"]),s("pif",["0x00"]),s("sea",["0x00"]),s("ytr",["0x00"]),s("mp4",["0x66","0x74","0x79","0x70"],{mime:"video/mp4",extension:"mp4"},4),s("pdb",["0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00"]),s("dba",["0xBE","0xBA","0xFE","0xCA"]),s("dba2",["0x00","0x01","0x42","0x44"]),s("tda",["0x00","0x01","0x44","0x54"]),s("tda2",["0x00","0x01","0x00","0x00"]),s("ico",["0x00","0x00","0x01","0x00"],{mime:"image/x-icon",extension:"ico"}),s("3gp",["0x66","0x74","0x79","0x70","0x33","0x67"]),s("z",["0x1F","0x9D"]),s("tar.z",["0x1F","0xA0"]),s("bac",["0x42","0x41","0x43","0x4B","0x4D","0x49","0x4B","0x45","0x44","0x49","0x53","0x4B"]),s("bz2",["0x42","0x5A","0x68"],{mime:"application/x-bzip2",extension:"bz2"}),s("tif",["0x49","0x49","0x2A","0x00"],{mime:"image/tiff",extension:"tif"}),s("tiff",["0x4D","0x4D","0x00","0x2A"],{mime:"image/tiff",extension:"tiff"}),s("cr2",["0x49","0x49","0x2A","0x00","0x10","0x00","0x00","0x00","0x43","0x52"]),s("cin",["0x80","0x2A","0x5F","0xD7"]),s("cin1",["0x52","0x4E","0x43","0x01"]),s("cin2",["0x52","0x4E","0x43","0x02"]),s("dpx",["0x53","0x44","0x50","0x58"]),s("dpx2",["0x58","0x50","0x44","0x53"]),s("exr",["0x76","0x2F","0x31","0x01"]),s("bpg",["0x42","0x50","0x47","0xFB"]),s("ilbm",["0x46","0x4F","0x52","0x4D","?","?","?","?","0x49","0x4C","0x42","0x4D"]),s("8svx",["0x46","0x4F","0x52","0x4D","?","?","?","?","0x38","0x53","0x56","0x58"]),s("acbm",["0x46","0x4F","0x52","0x4D","?","?","?","?","0x41","0x43","0x42","0x4D"]),s("anbm",["0x46","0x4F","0x52","0x4D","?","?","?","?","0x41","0x4E","0x42","0x4D"]),s("anim",["0x46","0x4F","0x52","0x4D","?","?","?","?","0x41","0x4E","0x49","0x4D"]),s("faxx",["0x46","0x4F","0x52","0x4D","?","?","?","?","0x46","0x41","0x58","0x58"]),s("ftxt",["0x46","0x4F","0x52","0x4D","?","?","?","?","0x46","0x54","0x58","0x54"]),s("smus",["0x46","0x4F","0x52","0x4D","?","?","?","?","0x53","0x4D","0x55","0x53"]),s("cmus",["0x46","0x4F","0x52","0x4D","?","?","?","?","0x43","0x4D","0x55","0x53"]),s("yuvn",["0x46","0x4F","0x52","0x4D","?","?","?","?","0x59","0x55","0x56","0x4E"]),s("iff",["0x46","0x4F","0x52","0x4D","?","?","?","?","0x46","0x41","0x4E","0x54"]),s("aiff",["0x46","0x4F","0x52","0x4D","?","?","?","?","0x41","0x49","0x46","0x46"],{mime:"audio/x-aiff",extension:"aiff"}),s("idx",["0x49","0x4E","0x44","0x58"]),s("lz",["0x4C","0x5A","0x49","0x50"]),s("exe",["0x4D","0x5A"]),s("zip",["0x50","0x4B","0x03","0x04"],{mime:"application/zip",extension:"zip"}),s("zip",["0x50","0x4B","0x05","0x06"],{mime:"application/zip",extension:"zip"}),s("zip",["0x50","0x4B","0x07","0x08"],{mime:"application/zip",extension:"zip"}),s("jar",["0x50","0x4B","0x03","0x04"],{mime:"application/java-archive",extension:"jar"}),s("jar",["0x50","0x4B","0x05","0x06"],{mime:"application/java-archive",extension:"jar"}),s("jar",["0x50","0x4B","0x07","0x08"],{mime:"application/java-archive",extension:"jar"}),s("odt",["0x50","0x4B","0x03","0x04"],{mime:"application/vnd.oasis.opendocument.text",extension:"odt"}),s("odt",["0x50","0x4B","0x05","0x06"],{mime:"application/vnd.oasis.opendocument.text",extension:"odt"}),s("odt",["0x50","0x4B","0x07","0x08"],{mime:"application/vnd.oasis.opendocument.text",extension:"odt"}),s("ods",["0x50","0x4B","0x03","0x04"],{mime:"application/vnd.oasis.opendocument.spreadsheet",extension:"ods"}),s("ods",["0x50","0x4B","0x05","0x06"],{mime:"application/vnd.oasis.opendocument.spreadsheet",extension:"ods"}),s("ods",["0x50","0x4B","0x07","0x08"],{mime:"application/vnd.oasis.opendocument.spreadsheet",extension:"ods"}),s("odp",["0x50","0x4B","0x03","0x04"],{mime:"application/vnd.oasis.opendocument.presentation",extension:"odp"}),s("odp",["0x50","0x4B","0x05","0x06"],{mime:"application/vnd.oasis.opendocument.presentation",extension:"odp"}),s("odp",["0x50","0x4B","0x07","0x08"],{mime:"application/vnd.oasis.opendocument.presentation",extension:"odp"}),s("docx",["0x50","0x4B","0x03","0x04"],{mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",extension:"docx"}),s("docx",["0x50","0x4B","0x05","0x06"],{mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",extension:"docx"}),s("docx",["0x50","0x4B","0x07","0x08"],{mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",extension:"docx"}),s("xlsx",["0x50","0x4B","0x03","0x04"],{mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",extension:"xlsx"}),s("xlsx",["0x50","0x4B","0x05","0x06"],{mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",extension:"xlsx"}),s("xlsx",["0x50","0x4B","0x07","0x08"],{mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",extension:"xlsx"}),s("pptx",["0x50","0x4B","0x03","0x04"],{mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation",extension:"pptx"}),s("pptx",["0x50","0x4B","0x05","0x06"],{mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation",extension:"pptx"}),s("pptx",["0x50","0x4B","0x07","0x08"],{mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation",extension:"pptx"}),s("vsdx",["0x50","0x4B","0x03","0x04"]),s("vsdx",["0x50","0x4B","0x05","0x06"]),s("vsdx",["0x50","0x4B","0x07","0x08"]),s("apk",["0x50","0x4B","0x03","0x04"]),s("apk",["0x50","0x4B","0x05","0x06"]),s("apk",["0x50","0x4B","0x07","0x08"]),s("aar",["0x50","0x4B","0x03","0x04"]),s("aar",["0x50","0x4B","0x05","0x06"]),s("aar",["0x50","0x4B","0x07","0x08"]),s("rar",["0x52","0x61","0x72","0x21","0x1A","0x07","0x00"],{mime:"application/vnd.rar",extension:"rar"}),s("rar",["0x52","0x61","0x72","0x21","0x1A","0x07","0x01","0x00"],{mime:"application/vnd.rar",extension:"rar"}),s("rar",["0x7F","0x45","0x4C","0x46"],{mime:"application/vnd.rar",extension:"rar"}),s("png",["0x89","0x50","0x4E","0x47","0x0D","0x0A","0x1A","0x0A"],{mime:"image/png",extension:"png"}),s("apng",["0x89","0x50","0x4E","0x47","0x0D","0x0A","0x1A","0x0A"],{mime:"image/apng",extension:"apng"}),s("class",["0xCA","0xFE","0xBA","0xBE"]),s("class",["0xEF","0xBB","0xBF"]),s("class",["0xFE","0xed","0xFA","0xCE"],void 0,4096),s("class",["0xFE","0xed","0xFA","0xCF"],void 0,4096),s("class",["0xCE","0xFA","0xed","0xFE"]),s("class",["0xCF","0xFA","0xed","0xFE"]),s("class",["0xFF","0xFE"]),s("class",["0xFF","0xFE"]),s("class",["0xFF","0xFE","0x00","0x00"]),s("ps",["0x25","0x21","0x50","0x53"]),s("pdf",["0x25","0x50","0x44","0x46"],{mime:"application/pdf",extension:"pdf"}),s("asf",["0x30","0x26","0xB2","0x75","0x8E","0x66","0xCF","0x11","0xA6","0xD9","0x00","0xAA","0x00","0x62","0xCE","0x6C"]),s("wma",["0x30","0x26","0xB2","0x75","0x8E","0x66","0xCF","0x11","0xA6","0xD9","0x00","0xAA","0x00","0x62","0xCE","0x6C"]),s("wmv",["0x30","0x26","0xB2","0x75","0x8E","0x66","0xCF","0x11","0xA6","0xD9","0x00","0xAA","0x00","0x62","0xCE","0x6C"]),s("deploymentimage",["0x24","0x53","0x44","0x49","0x30","0x30","0x30","0x31"]),s("ogg",["0x4F","0x67","0x67","0x53"],{mime:"audio/ogg",extension:"ogg"}),s("oga",["0x4F","0x67","0x67","0x53"],{mime:"audio/ogg",extension:"oga"}),s("ogv",["0x4F","0x67","0x67","0x53"],{mime:"video/ogg",extension:"ogv"}),s("psd",["0x38","0x42","0x50","0x53"],{mime:"application/x-photoshop",extension:"psd"}),s("wav",["0x52","0x49","0x46","0x46","?","?","?","?","0x57","0x41","0x56","0x45"],{mime:"audio/x-wav",extension:"wav"}),s("avi",["0x52","0x49","0x46","0x46","?","?","?","?","0x41","0x56","0x49","0x20"],{mime:"video/x-msvideo",extension:"avi"}),s("mp3",["0xFF","0xFB"],{mime:"audio/mpeg",extension:"mp3"}),s("mp3",["0x49","0x44","0x33"],{mime:"audio/mpeg",extension:"mp3"}),s("bmp",["0x42","0x4D"],{mime:"image/bmp",extension:"bmp"}),s("iso",["0x43","0x44","0x30","0x30","0x31"]),s("flac",["0x66","0x4C","0x61","0x43"]),s("mid",["0x4D","0x54","0x68","0x64"],{mime:"audio/midi",extension:"mid"}),s("midi",["0x4D","0x54","0x68","0x64"],{mime:"audio/midi",extension:"midi"}),s("doc",["0xD0","0xCF","0x11","0xE0","0xA1","0xB1","0x1A","0xE1"],{mime:"application/msword",extension:"doc"}),s("xls",["0xD0","0xCF","0x11","0xE0","0xA1","0xB1","0x1A","0xE1"],{mime:"application/vnd.ms-excel",extension:"xls"}),s("ppt",["0xD0","0xCF","0x11","0xE0","0xA1","0xB1","0x1A","0xE1"],{mime:"application/vnd.ms-powerpoint",extension:"ppt"}),s("msg",["0xD0","0xCF","0x11","0xE0","0xA1","0xB1","0x1A","0xE1"]),s("dex",["0x64","0x65","0x78","0x0A","0x30","0x33","0x35","0x00"]),s("vmdk",["0x4B","0x44","0x4D"]),s("crx",["0x43","0x72","0x32","0x34"]),s("fh8",["0x41","0x47","0x44","0x33"]),s("cwk",["0x05","0x07","0x00","0x00","0x42","0x4F","0x42","0x4F","0x05","0x07","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x01"]),s("cwk",["0x06","0x07","0xE1","0x00","0x42","0x4F","0x42","0x4F","0x06","0x07","0xE1","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x00","0x01"]),s("toast",["0x45","0x52","0x02","0x00","0x00","0x00"]),s("toast",["0x8B","0x45","0x52","0x02","0x00","0x00","0x00"]),s("dmg",["0x78","0x01","0x73","0x0D","0x62","0x62","0x60"]),s("xar",["0x78","0x61","0x72","0x21"]),s("dat",["0x50","0x4D","0x4F","0x43","0x43","0x4D","0x4F","0x43"]),s("nes",["0x4E","0x45","0x53","0x1A"]),s("tar",["0x75","0x73","0x74","0x61","0x72","0x00","0x30","0x30"],void 0,257),s("tar",["0x75","0x73","0x74","0x61","0x72","0x20","0x20","0x00"],void 0,257),s("tox",["0x74","0x6F","0x78","0x33"]),s("mlv",["0x4D","0x4C","0x56","0x49"]),s("windowsupdate",["0x44","0x43","0x4D","0x01","0x50","0x41","0x33","0x30"]),s("7z",["0x37","0x7A","0xBC","0xAF","0x27","0x1C"],{mime:"application/x-7z-compressed",extension:"7z"}),s("gz",["0x1F","0x8B"],{mime:"application/gzip",extension:"gz"}),s("tar.gz",["0x1F","0x8B"],{mime:"application/gzip",extension:"tar.gz"}),s("xz",["0xFD","0x37","0x7A","0x58","0x5A","0x00","0x00"],{mime:"application/gzip",extension:"xz"}),s("tar.xz",["0xFD","0x37","0x7A","0x58","0x5A","0x00","0x00"],{mime:"application/gzip",extension:"tar.xz"}),s("lz2",["0x04","0x22","0x4D","0x18"]),s("cab",["0x4D","0x53","0x43","0x46"]),s("mkv",["0x1A","0x45","0xDF","0xA3"]),s("mka",["0x1A","0x45","0xDF","0xA3"]),s("mks",["0x1A","0x45","0xDF","0xA3"]),s("mk3d",["0x1A","0x45","0xDF","0xA3"]),s("webm",["0x1A","0x45","0xDF","0xA3"],{mime:"audio/webm",extension:"webm"}),s("dcm",["0x44","0x49","0x43","0x4D"],void 0,128),s("xml",["0x3C","0x3f","0x78","0x6d","0x6C","0x20"],{mime:"application/xml",extension:"xml"}),s("wasm",["0x00","0x61","0x73","0x6d"]),s("lep",["0xCF","0x84","0x01"]),s("swf",["0x43","0x57","0x53"],{mime:"application/x-shockwave-flash",extension:"swf"}),s("swf",["0x46","0x57","0x53"],{mime:"application/x-shockwave-flash",extension:"swf"}),s("deb",["0x21","0x3C","0x61","0x72","0x63","0x68","0x3E"]),s("rtf",["0x7B","0x5C","0x72","0x74","0x66","0x31"],{mime:"application/rtf",extension:"rtf"}),s("m2p",["0x00","0x00","0x01","0xBA"]),s("vob",["0x00","0x00","0x01","0xBA"]),s("mpg",["0x00","0x00","0x01","0xBA"],{mime:"video/mpeg",extension:"mpg"}),s("mpeg",["0x00","0x00","0x01","0xBA"],{mime:"video/mpeg",extension:"mpeg"}),s("mpeg",["0x47"],{mime:"video/mpeg",extension:"mpeg"}),s("mpeg",["0x00","0x00","0x01","0xB3"],{mime:"video/mpeg",extension:"mpeg"}),s("hl2demo",["48","4C","32","44","45","4D","4F"]),e.default=()=>m},2718:(x,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.fromHex=e.toHex=void 0;const i=x=>new Number(x).toString(16).toLowerCase();e.toHex=x=>`0x${1===i(x).length?"0"+i(x):i(x)}`,e.fromHex=x=>new Number(x)},93321:(x,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createComplexNode=e.createNode=e.merge=void 0;const i=x=>({typename:x.typename,mime:x.info.mime,extension:x.info.extension}),n=x=>x[0],o=x=>x.slice(1,x.length);e.merge=(x,t)=>{if(0===x.bytes.length)return t;const m=n(x.bytes),s=o(x.bytes);if(((x,e)=>x&&0===e.length)(t.bytes[m],s)){const e=t.bytes[m];return t.bytes[m]={...e,matches:[...e.matches?e.matches:[],i(x)]},t}return t.bytes[m]?(t.bytes[m]=e.merge(e.createNode(x.typename,s,x.info),t.bytes[m]),t):(t.bytes[m]||(t.bytes[m]={...t.bytes[m],...e.createComplexNode(x.typename,s,x.info)}),t)},e.createNode=(x,e,i)=>({typename:x,bytes:e,info:i||{}}),e.createComplexNode=(x,t,m)=>{let s={bytes:{},matches:void 0};const a=n(t),p=o(t);return 0===t.length?{matches:[i({typename:x,info:m?{extension:m.extension,mime:m.mime}:{}})],bytes:{}}:(s.bytes[a]=e.createComplexNode(x,p,m),s)}}}]);
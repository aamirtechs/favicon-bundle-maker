const test=require("node:test");const assert=require("node:assert/strict");const L=require("../src/logic.js");
function tinyPNG(n){const b=new Uint8Array(n||8);b[0]=0x89;b[1]=0x50;return b;}
test("size plan includes ico pngs and apple icon",()=>{const p=L.planSizes();assert.ok(p.find(x=>x.name==="apple-touch-icon.png"));assert.ok(p.find(x=>x.kind==="ico"));assert.ok(p.length>=8);});
test("manifest json is valid and has icons",()=>{const m=JSON.parse(L.buildManifestJSON({name:"Test Site"}));assert.equal(m.name,"Test Site");assert.equal(m.icons.length,3);assert.equal(m.theme_color,"#0b1f3a");});
test("head tags include manifest and apple icon",()=>{const h=L.buildHeadTags({});assert.match(h,/apple-touch-icon/);assert.match(h,/site\.webmanifest/);assert.match(h,/favicon\.ico/);});
test("ico header structure",()=>{const ico=L.buildICO([{size:16,png:tinyPNG(10)},{size:32,png:tinyPNG(12)}]);assert.equal(ico[2],1);assert.equal(ico[3],0);const dv=new DataView(ico.buffer);assert.equal(dv.getUint16(4,true),2);assert.equal(ico[6],16);assert.equal(ico[22],32);});
test("ico offsets point past directory",()=>{const ico=L.buildICO([{size:16,png:tinyPNG(10)}]);const dv=new DataView(ico.buffer);const off=dv.getUint32(6+12,true);assert.equal(off,6+16);assert.equal(dv.getUint32(6+8,true),10);});
test("text render plan defaults and validation",()=>{const p=L.textRenderPlan("Hi",{});assert.equal(p.canvasSize,512);assert.equal(L.validatePlan(p).length,0);assert.ok(L.validatePlan({text:"",padding:0,canvasSize:512}).length>0);});
test("ico sizes are 16 32 48",()=>{assert.deepEqual(L.icoSizes(),[16,32,48]);});
test("empty ico still has header",()=>{const ico=L.buildICO([]);assert.equal(ico.length,6);});

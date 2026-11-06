import { readFileSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import assert from 'node:assert/strict'
const root=resolve(import.meta.dirname,'..');const r=JSON.parse(readFileSync(join(root,'registry.json'),'utf8'))
assert.equal(new Set(r.items.map(i=>i.name)).size,r.items.length,'duplicate names')
for(const item of r.items){
 assert.match(item.name,/^[a-z][a-z0-9-]*$/); assert.ok(item.description);assert.ok(item.files.length)
 const output=join(root,'public/r',`${item.name}.json`);assert.ok(existsSync(output),output)
 const built=JSON.parse(readFileSync(output,'utf8'));assert.equal(built.files.length,item.files.length)
 for(const f of built.files){assert.ok(existsSync(join(root,f.path)),f.path); assert.equal(f.content,readFileSync(join(root,f.path),'utf8'));assert.ok(f.target?.startsWith('src/'))}
 console.log('PASS '+item.name)
}
console.log('Validated '+r.items.length+' registry entries')

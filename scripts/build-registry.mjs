import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from 'node:fs'
import { join, resolve } from 'node:path'
const root = resolve(import.meta.dirname, '..')
const registry = JSON.parse(readFileSync(join(root,'registry.json'),'utf8'))
const out = join(root,'public/r');mkdirSync(out,{recursive:true})
const expected = new Set(registry.items.map(x=>`${x.name}.json`))
for(const file of readdirSync(out)) if(file.endsWith('.json')&&!expected.has(file)) unlinkSync(join(out,file))
for(const item of registry.items){
 const files = item.files.map(file=>({ ...file, content: readFileSync(join(root,file.path),'utf8') }))
 const result = { $schema:'https://shadcn-vue.com/schema/registry-item.json',name:item.name,type:item.type,title:item.title,description:item.description,dependencies:item.dependencies??[],files }
 writeFileSync(join(out,`${item.name}.json`),JSON.stringify(result,null,2)+'\n')
 console.log('Built /r/'+item.name+'.json ('+files.length+' files)')
}
writeFileSync(join(out,'index.json'),JSON.stringify(registry.items.map(({name,type,title,description})=>({name,type,title,description})),null,2)+'\n')

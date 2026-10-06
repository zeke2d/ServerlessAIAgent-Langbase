import 'dotenv/config';
import {Langbase} from 'langbase';

const langbase = new Langbase({
	apiKey: process.env.LANGBASE_API_KEY!,
});

//async function main(){
  //const memory = await langbase.memories.create({
    //name: '',
    //description: '',
    //embedding_model: ''
  //});
//}

//main();

//Create a memory named `knowledge-base` using the `memories.create` method and use `openai:text-embedding-3-large` model for embeddings. Finally log the created memory to the console. 


async function main(){
  const memory = await langbase.memories.create({
    name: 'knowledge-base',
    description: 'An AI memory for agentic memory course',
    embedding_model: 'openai:text-embedding-3-large'

  });

  console.log('AI Memory:', memory);
}

main();
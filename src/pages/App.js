import gitlogo from '../assets/github-logo.png'
import {Container} from './styles'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Buttton';
import { useState } from 'react';
import { api } from '../services/api';

const App = () => {
  const [currentRepo,setCurrentRepo] = useState('');
  const[repos,setRepos] = useState([]);


  const handleRepo = async () =>{
    const {data} =  await api.get(` repos/${currentRepo} https://api.github.com/repos/pablohdev/dio-clone`)
    if(data.id){
      setRepos(prev =>[...prev, data])
    }
  }
  return (
    <Container>
     <img  src={gitlogo}  width={72} height={72} alt='github logo'/>
     <Input  value= {currentRepo}/>
     <Button  onclick={handleRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
     {repos.map(repo => <ItemRepo  repo={repo}/>)}
     
    </Container>
  );
}

export default App;

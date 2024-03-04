import {useState,useEffect} from 'react'
import axios from "axios";
import {Col,Card,CardBody,CardFooter,CardImg,Badge} from 'reactstrap'

const PokeTarjetas = (params) => {
  const [pokemon,setPokemon] = useState([]);
  const [imagen, setImagen]= useState("");
  const [cardClass, setClases]= useState("d-none");
  const [loadClass, setLoadClass]= useState("");
  useEffect(()=>{
    getPokemon()
  },[])
  const getPokemon = async()=>{
    const liga = params.poke.url;
    axios.get(liga).then(async(response)=>{
       const respuesta = response.data;
       setPokemon(respuesta);
    })

  }

  return (
    <Col sm='4' lg='3' className='mb-3'>
    <Card className='shadow border-4 border-warning'>
      <CardImg src={imagen} height='150' className='p-2'/>
      <CardBody className='text-center'>
        <Badge pill color='danger'>#{pokemon.id}</Badge>
        <label className ='fs-4 text-capitalize'>{pokemon.name}</label>
      </CardBody>
      <CardFooter className='bg-warning'>
        <link className='btn btn-dark'></link>
      </CardFooter>
     </Card>
    </Col>
  )
}

export default PokeTarjetas
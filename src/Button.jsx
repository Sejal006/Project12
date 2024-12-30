function Button(props){
    const handleclick=props.onInc;
     
     console.log('done');
     return (
       <button className='btn btn-danger' onClick ={handleclick}>+1</button>
     )
   }
   export default Button;
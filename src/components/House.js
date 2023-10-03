
const House = (props) => {
    // console.log(`detail ${JSON.stringify(props.houseinfo)}`)
    // return (<>
    //     {
    //         props.houseinfo.map((item)=>{
    //             return (    
                // <div key={item.id}>
                //     <div className="row">
                //         <div className="col-sm-6">
                //             <b> {item.address}, {item.county}</b>
                //         </div>        
                //         <div className="col-sm-6">
                //             <b> Price: USD {item.price}</b>
                //         </div>
                //     </div>
                //     <div className="row">
                //         <div className="col-sm-6 ">
            
                //             <img className='img-fluid' src= {`/img/${item.photo}`} alt="house"/>
                            
                //         </div>
                //         <div className="col-sm-6">
                //             <p>{item.description} </p>
                //         </div>
                //     </div>
                // </div>)
    //         })
    //     }
    // </>)

    // if (!props.houseinfo) {
    //     return <p>Loading...</p>;
    //   }
         let imgSrc = `/img/${props.houseinfo.photo}`
         return(
        <>
        <div className="row">
            <div className="col-sm-6">
                <b> {props.houseinfo.address}, {props.houseinfo.county}</b>
            </div>        
            <div className="col-sm-6">
                <b> Price: USD {props.houseinfo.price}</b>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 ">

                <img className='img-fluid' src={imgSrc} alt="house"/>
                
            </div>
            <div className="col-sm-6">
                <p>{props.houseinfo.description} </p>
            </div>
        </div>
    </>);
}
 
export default House;


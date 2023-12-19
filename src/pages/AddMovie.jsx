import '../css/login.css'

const AddMovie = () => {
    return (
        <form action="">
        <div id='content' className='container-fluid d-flex flex-row justify-content-start'>
            
            <div className='container-fluid d-flex flex-column w-50 align-items-left'>
                <h1>Add Movie</h1>
                
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Movie Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className='mb-3'>
                    <label for="" className="form-label">Director</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div> 
                
                <div className='mb-3'>
                    <label for="" className="form-label">Release year</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>               
                
            </div>
            <div className='container-fluid d-flex flex-column w-50 align-items-left'>
                <h1></h1>
                <div className='mt-5'>
                    <label for="exampleInputEmail1" className="form-label">Movie Cover</label>
                    <input className='form-control' type="file" name="" id="" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Description</label>
                    <textarea className='form-control' rows={5}></textarea>
                </div>
            </div>         

        </div>
        <div className='d-flex justify-content-center'>
            <button type="reset" className="btn btn-danger rounded-pill me-5">Clear all</button>
            <button type="submit" className="btn btn-success rounded-pill">Add movie</button>
        </div>
        </form>
    )
}

export default AddMovie;
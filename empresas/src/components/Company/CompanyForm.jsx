import React from 'react'

const CompanyForm = () => {
    return (
        <div>
            <h2></h2>
        <form>
            <div>
                <label>Name</label>
                <input type="text" name="name" className="form-control"></input>
            </div>
            <div>
                <label>Foundation</label>
                <input type="text" name="foundation" className="form-control"></input>
            </div>
            <div>
                <label>Website</label>
                <input type="url" name="website" className="form-control"></input>
            </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default CompanyForm

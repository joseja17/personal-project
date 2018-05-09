import React, { Component } from 'react';
import './Edit.css';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
            title: '',
            date: '',
            description: '',
            image: '',
            latitud: '',
            longitud: '',
            address: ''
        }
        this.fireBtn = this.fireBtn.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/api/adventures/' + this.props.match.params.id).then(resp => {
            console.log(resp);
            var data = resp.data[0]
            this.setState({
                location: data.location,
                title: data.title,
                date: data.date,
                description: data.description,
                image: data.image,
                latitud: data.latitud,
                longitud: data.longitud
            })
        })
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }),
        console.log(this.state)
    }

    fireBtn() {
        console.log(this.state.location)
        axios.post('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.location + '&key=AIzaSyC45ozcxrtnKnKn9KUtswSw-ikgWrjePhs').then(resp => {
            console.log(resp)
            this.setState({
                latitud: resp.data.results[0].geometry.location.lat,
                longitud: resp.data.results[0].geometry.location.lng,
                address: resp.data.results[0].formatted_address
            })
            toast(`Searching for your location in ${this.state.address}.`)
            console.log(this.state.latitud)
            console.log(this.state.longitud)
        })
    }

    saveChanges(e){
        e.preventDefault();
        axios.put('/api/adventures/'+ this.props.match.params.id, {location: this.state.location, title: this.state.title, date:this.state.date, description: this.state.description, image: this.state.image, latitud: this.state.latitud, longitud: this.state.longitud}).then(resp=>{
            console.log(resp)
            toast('Adventure Saved!')
            setTimeout(()=>{this.props.history.push('/Adventures')}, 2505)
        })
        .catch((err)=>{
            console.log(err)
            toast.error('Failed to edit your adventure')
        })
    }

    backToHome(e){
        this.props.history.push('/Adventures');
    }



    render() {
        return (
            <div className="edit-page">
                <ToastContainer autoClose={2500}/>
                <div className='edit-box'>
                {/* <Link to="/Adventures"> <img alt="" className="Ex-button" src="./error.svg"/></Link> */}
                    <div><h2 className='edit-your-adv' >Edit Your Adventure</h2></div>

                    <h4 className='edit-adv-h4'>Title</h4>
                    <input value={this.state.title} autoComplete='off' className='creat-input' onChange={(e) => this.handleOnChange(e)} name='title' placeholder='Title' type='text' />

                    <h4 className='edit-adv-h4'>Location</h4>
                    <input value={this.state.location} autoComplete="off" className='creat-input' onChange={(e) => this.handleOnChange(e)} name='location' placeholder='Location' type='text' />
                    <button className="search-btn" onClick={this.fireBtn}>Search</button>

                     <h4 className='edit-adv-h4'>Date</h4>
                    <input value={this.state.date} autoComplete='off' className='creat-input' onChange={(e) => this.handleOnChange(e)} name='date' placeholder='Date' type='date' />

                     <h4 className='edit-adv-h4'>Image</h4>
                    <input value={this.state.image} autoComplete='off' className='creat-input' onChange={(e) => this.handleOnChange(e)} name='image' placeholder='Image' type='text' />

                     <h4 className='edit-adv-h4'>Details</h4>
                    <textarea value={this.state.description} autoComplete='off' className='creat-input' onChange={(e) => this.handleOnChange(e)} name='description' placeholder='Details' type='text' />

                    <button onClick={e=>this.saveChanges(e)} className="button-save">Save</button>
                     <button className="button-cancel" onClick={e=>this.backToHome(e)}>Cancel</button>
                </div>
            </div>
        )
    }
}
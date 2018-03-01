import axios from 'axios';

const initialState = {
    user: {},
    location: '',
    title: '',
    date: '',
    details: '',
    images: '',
    latitud:'',
    longitud: ''
}

const GET_USER = 'GET_USER';
const GET_LOCATION = "GET_LOCATION";
const GET_TITLE = "GET_TITLE";
const GET_DATE = "GET_DATE";
const GET_DETAILS = "GET_DETAILS";
const GET_IMAGES = "GET_IMAGES";
const GET_LATLONG = "GET_LATLONG"

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        case GET_LOCATION:
            return Object.assign({}, state, { location: action.payload });

        case GET_TITLE:
            return Object.assign({}, state, { title: action.payload });

        case GET_DATE:
            return Object.assign({}, state, { date: action.payload });

        case GET_DETAILS:
            return Object.assign({}, state, { details: action.payload });

        case GET_IMAGES:
            return Object.assign({}, state, { images: action.payload });
        
            case GET_LATLONG:
            return Object.assign({}, state, { latitud: action.payload.latitud },{longitud: action.payload.longitud});




        default:
            return state;
    }
}

export function getUser() {
    const user = axios.get('/auth/me').then(res => {
        return res.data;
    })
    return {
        type: GET_USER,
        payload: user
    }
}

export function getLocation( location ) {
    return {
      type: GET_LOCATION,
      payload: location
    };
  }

  export function getTitle( title ) {
    
    return {
      type: GET_TITLE,
      payload: title
    };
  }

  export function getDate( date  ) {
    
    return {
      type: GET_DATE,
      payload: date
    };
  }

  export function getDetails( details ) {
   
    return {
      type: GET_DETAILS,
      payload: details
    };
  }

  export function getImages( images ) {
   
    return {
      type: GET_IMAGES,
      payload: images
    };
  }

  export function getLatLong( latitud, longitud ) {
    return {
      type: GET_LATLONG,
      payload: {latitud, longitud}
    };
  }


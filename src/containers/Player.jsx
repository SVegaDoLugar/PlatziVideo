import React, {useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions/index.js';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
    const { id } =useParams(props.match);
    const hasPlaying = Object.keys(props.playing).length > 0;
    useEffect(() =>{
        props.getVideoSource(id)
    }, []);
    const navigate = useNavigate();
    return hasPlaying ? (
            <div className="Player">

                <div className="Player-back">
                        <button type="button" onClick={() => navigate(-1)}>
                            Regresar
                        </button>
                    
                    <p></p>
                </div>

                <iframe 
                width="790"
                height="445"
                src={props.playing.source}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                >
                </iframe>
                
            </div>
    ) : <button onClick={() => navigate(-1)}></button>;
}

const mapStateToProps = state => {
    return{
        playing: state.playing,
    }
}
const mapDispatchToProps = {
   getVideoSource,
}
export default connect(mapStateToProps,mapDispatchToProps)(Player);
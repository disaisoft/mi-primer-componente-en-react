import React from 'react';
import confLogo from '../images/logo-ag.png'
import './styles/ProfileStyle.css'

class Profile extends React.Component {

    render() {
        return (
            //contenedro de la card
            <div className="Profile">
                {/*Encabezado de perfil*/}
                <div className="Profile__header">
                    <img className="Profile__logo" src={confLogo} alt='imagen' />
                </div>
                {/*Nombre de usuario y avatar*/}
                <div className="Profile__section-name">
                    <img className="Profile__avatar" src='https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png' alt='imagen' />
                    <h1> David Isai <br /> López Fandiño </h1>
                </div>
                {/*Informacion del usuario*/}
                <div className="Profile__section-info">
                    <h2> FrontEnd Developer</h2>
                    <div> @developerwebdave </div>
                </div>
                {/*Conferencia Geek*/}
                <div className="Profile__footer">
                    #GeekConf
                </div>

            </div>


        );
    }
}

export default Profile; 
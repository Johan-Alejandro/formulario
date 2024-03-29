import Formulario from "./Formulario";
import SocialButtom from "./SocialButtom";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Registro = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3>Crea Una Cuenta</h3>
          <div className="rrs">
            <button>
              <SocialButtom icon={faFacebook} />
            </button>
            <button>
              <a href="https://github.com/Johan-Alejandro">
                <SocialButtom icon={faGithub} />
              </a>
            </button>
            <button>
              <SocialButtom icon={faLinkedin} />
            </button>
          </div>
          <p>O usa tu email para registrarte</p>
          <Formulario />
        </div>
      </div>
    </>
  );
};
export default Registro;

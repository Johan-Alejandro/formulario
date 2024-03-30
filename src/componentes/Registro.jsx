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
              <a href="https://www.facebook.com/">
                <SocialButtom icon={faFacebook} />
              </a>
            </button>
            <button>
              <a href="https://github.com">
                <SocialButtom icon={faGithub} />
              </a>
            </button>
            <button>
              <a href="https://www.linkedin.com/">
                <SocialButtom icon={faLinkedin} />
              </a>
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

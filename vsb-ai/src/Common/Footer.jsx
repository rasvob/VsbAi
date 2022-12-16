import React, {useState} from 'react';
import { withRouter } from "react-router-dom";

export const Footer = (props) => {
    const [year] = useState(() => {
        let date = new Date();
        return date.getFullYear();
    });

    return (
        <footer className="footer font-small">
            <div className="container footer-copyright text-center py-3">© {year} Copyright:
                <a href="https://ai.vsb.cz/"> ai.vsb.cz</a> <br/> Created by <a href='https://github.com/rasvob' rel="noopener noreferrer" target="_blank" className={`link ${'link-secondary'}`}>Radek Svoboda</a> in <a href='https://reactjs.org/' rel="noopener noreferrer" target="_blank" className={`link ${'link-secondary'}`}>React</a> ✌️
            </div>
        </footer>
    )
}

export default withRouter(Footer);
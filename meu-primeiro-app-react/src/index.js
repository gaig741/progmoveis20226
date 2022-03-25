import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
    const estilosBotao = {
        marginTop: 12, 
        paddingtop: 8, 
        paddingbottom:8,
        backgroundColor: 'blueviolet', 
        color:'white',
        border:'none',
        width:'100%',
        borderRadius:8}
    const textoDoRotulo = 'Nome:'
    const obterTextoDoBotao = () => "Enviar"
    return (
        <div style={{margin:'auto', width: 768, 
        backgroundColor:'#EEE', padding: 12, borderRadius: 8}}>
            <label className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom:4}}>
                {textoDoRotulo}  
            </label>
            <input id="nome" type="text" style={{paddingtop:8, paddingbottom:8, 
            borderStyle:'hidden', width:'100%', borderRadius:8, outline:'none', boxSizing: 'border-box'}}>
            </input>
            <button style={estilosBotao}>
            {obterTextoDoBotao()}
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

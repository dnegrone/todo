import React from 'react';

interface State {
    myCall: true
}

const Call = () => {
	return (
		<div className="wrap interna centered">
        
            <div className="row v-spacer">
                <div className="full">
                    <h2>Call Estratégica de 60 minutos.</h2>
                    <p>Quer ter certeza de que você está indo na direção certa antes de construir algo grande? Precisa de uma desmontagem rápida de UI / UX do seu produto? Não consegue descobrir os próximos passos?</p>
                    <p>Estou aqui para ajudá-lo com isso, em uma sessão estratégica de 60 minutos tão focada quanto uma mira laser! Compartilhe sua tela; mostre-me como a sua aplicação se comporta; "use" a minha cabeça para te ajudar a achar novas soluções sobre os seus problemas. Você sairá com uma lista de ações para aplicar imediatamente em sua empresa.</p>
                    <p>O que está incluído?</p>
                    <ul>
                        <li>Conversa em vídeo de 60 minutos via Skype ou Zoom (com compartilhamento de tela, se necessário)</li>
                        <li>Gravação de vídeo da chamada</li>
                        <li>Uma semana de follow-up via email</li>
                    </ul>
                    
                    <h3>Pronto para a Call?</h3>
					<p>A <strong>Call Estratégica de 60 Minutos</strong> atualmente custa R$ 500. Reserve um horário usando o botão abaixo e receberá um link de pagamento e mais detalhes. Há também uma versão de duas horas disponível por R$ 995, mediante solicitação.</p>
					<div style={{"paddingTop": "20px"}}>
						<a href="#calendly" className="btn">Reserve sua chamada agora</a>
					</div>
					<div id="calendly">
						<h3><button className="btn">Reserve a sua Call Estratégica agora</button></h3>
						<iframe src="https://calendly.com/lexcesar/60min" style={{"border":0, "height":"900px", "width":"910px", "marginLeft":"-50px"}}></iframe>
					</div>
                </div>
			</div>
        
        </div>
	)
}

export default Call;
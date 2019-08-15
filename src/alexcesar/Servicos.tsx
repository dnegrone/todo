import React, { Component } from 'react';

const Servicos = () =>{ //{onRouteChange}
	return (
			<section id="servicos">
				<div className="wrap">
					{/* <a name="servicos" href="#"></a> */}
					<div className="container">
						<header>
							<h2>Serviços de UI/UX para ajudar a acelerar o desenvolvimento da sua aplicação web.</h2>
							<p>Para a sua conveniência, estou oferecendo os meus melhores serviços de
								consultoria com um risco baixo e pacotes de preço fixo. Se você não
								encontrar um pacote que atenda às suas necessidades, me mande um email
								em <a href="mailo:alexcesar@alexcesar.com">alexcesar@alexcesar.com</a> para discutirmos a sua solução personalizada.</p>
						</header>
						<div className="row">
							<div className="full">
								<h3>Call Estratégica de 1 hora.</h3>
								<p>Quer ter certeza de que você está indo na direção certa antes de construir algo grande? Precisa de um rápido raio-x da UI / UX do seu produto? Não consegue descobrir quais são os próximos passos?</p>
								<p>Estou aqui para ajudar com esta call estratégica (com vídeo) ultra focada.</p>
								<p className="small">Esta call de 1 hora atualmente custa R$ 500. <a href="#">Saiba mais.</a></p> {/*onClick={() => onRouteChange('page2')}*/}
							</div>
						</div>
						<div className="row">
							<div className="full">
								<h3>UI/UX Design Personalizado.</h3>
								<p>Para projetos maiores, posso me juntar à equipe por alguns dias (entre 2-5) e fazer o design de tela por tela da sua aplicação. O processo inclui wireframes (quando necessário) e protótipos de alta fidelidade no Photoshop.</p>
								<p>Por favor, entre em contato para receber uma estimativa e ver se chegamos a um bom acordo.</p>
								<p className="small">Diária à partir de R$ 1650. <a href="mailto:alexcesar@alexcesar.com">Mande um email para conversarmos a respeito.</a></p>
							</div>
						</div>
						<div className="row">
							<div className="full">
								<h3>Consultor: Analista de UX.</h3>
								<p>Durante o desenvolvimento de software, a sua equipe precisa de orientação sobre como evoluir com o design de UI/UX da sua aplicação web? Precisam de suporte as decisões tomadas e team coaching? Você já investiu muito para alcançar um bom nível de design?</p>
								<p>Este serviço mensal permitirá a sua empresa receber orientação personalizada de alta performance sem ter que contratar um agência.</p>
								<p className="small">Pacotes à partir de R$ 10400 (dependendo do tamanho da equipe). <a href="mailto:alexcesar@alexcesar.com">Mande um email para saber mais detalhes.</a></p>
							</div>
						</div>
					</div>
				</div>
			</section>
	)
}

export default Servicos;
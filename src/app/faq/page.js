export default function Faq(){
    return(
    <>
    <div className="container-fluid">
        <div className="title">
            <h2>Ajuda rápida</h2>
        </div>
        <div className="hr"></div>

        <div className="container-questions">

            <div className="row">

                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Não consigo redefinir a senha</h5>
                            <p className="card-text">Endereço de e-mail antigo?
                                Você precisa ter acesso ao endereço de e-mail cadastrado na sua conta do Spotify para abrir o link de redefinição de senha que nós enviamos.
                                Caso você não tenha acesso, estas são algumas opções:
                                Recupere o acesso ao endereço de e-mail, se possível.
                                Crie uma nova conta e comece do zero.</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"> Não lembro minhas informações de login</h5>
                            <p className="card-text">Se você não se lembrar da sua senha, use a página de redefinição de senha.
                                Se não se lembrar do seu e-mail ou nome de usuário, acesse a página de redefinição de senha e insira os endereços de e-mail que você pode ter usado para criar uma conta. Quando o endereço registrado no Spotify for inserido, aparecerá uma mensagem dizendo que o e-mail de redefinição de senha foi enviado.</p>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Formas de pagamento</h5>
                            <p className="card-text">Você pode pagar pelo Spotify Premium de muitas maneiras:</p>
                                <ul>
                                    <li>Cartão de crédito/débito</li>
                                    <li>Cartões pré-pagos</li>
                                    <li>PayPal</li>
                                    <li>Vales-presente</li>
                                    <li>Pagamento móvel</li>
                                    <li>Plano pré-pago</li>
                                    <li>Vales-presente</li>
                                </ul>
                            <p>Observação: os métodos variam de acordo com o país ou região..</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Atualizar dados de pagamento</h5>
                            <p className="card-text">Para atualizar ou mudar seus detalhes de pagamento:</p>
                            <ol>
                                <li>Entre na página da sua conta.</li>
                                <li>Em Seu plano, clique em ATUALIZAR ao lado da forma de pagamento.</li>
                                <li>Insira uma nova forma de pagamento.</li>
                            </ol>
                            <small>Se seu plano foi feito com uma empresa parceira (como sua operadora de celular ou Internet), ela é a responsável pelo seu pagamento. Fale com ela sobre assuntos relacionados ao pagamento.</small>
                            <a href="#">Clique no link de contato em Pagamento.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
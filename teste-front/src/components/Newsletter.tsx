import { useState, type SubmitEvent } from 'react';
import './Newsletter.scss';

export function Newsletter() {
  const [enviado, setEnviado] = useState(false);

  function aoEnviar(evento: SubmitEvent<HTMLFormElement>) {
    evento.preventDefault();
    evento.currentTarget.reset();
    setEnviado(true);
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-content">
        <div className="newsletter-info">
          <h2 className="newsletter-title" id="newsletter-title">
            Inscreva-se na nossa newsletter
          </h2>
          <p className="newsletter-text">
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter-form" onSubmit={aoEnviar}>
          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            aria-label="Seu nome"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            aria-label="Seu e-mail"
            required
          />
          <button type="submit">Inscrever</button>

          <label className="newsletter-terms">
            <input type="checkbox" name="termos" required />
            Aceito os termos e condições
          </label>

          {enviado && (
            <p className="newsletter-success" role="status">
              Inscrição realizada com sucesso!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
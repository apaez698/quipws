"use client";

import { useParams } from "next/navigation";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export default function TermsContent() {
  const { locale } = useParams();
  const isEs = locale === "es";

  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <span className="font-mono text-xs tracking-[3px] uppercase text-accent mb-4 block">
              {isEs ? "Legal" : "Legal"}
            </span>
            <h1 className="font-[var(--font-sora)] font-bold text-[clamp(36px,5vw,56px)] leading-[1.1] tracking-[-1.5px] text-text-primary mb-12">
              {isEs ? "Términos y Condiciones" : "Terms & Conditions"}
            </h1>

            <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
              {isEs
                ? "Última actualización: Abril 2026"
                : "Last updated: April 2026"}
            </p>

            {/* ───── 1. Agreement to Terms ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "1. Aceptación de los Términos" : "1. Agreement to Terms"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Al utilizar el sitio web o contratar los servicios de Quip
                  Make It Work (&quot;Quip&quot;, &quot;nosotros&quot;,
                  &quot;nuestro&quot;), usted (&quot;Cliente&quot;,
                  &quot;usted&quot;) acepta quedar vinculado por estos Términos
                  y Condiciones. Estos términos constituyen un acuerdo
                  legalmente vinculante entre usted y Quip Make It Work, con
                  domicilio en Quito, República del Ecuador, regido por el
                  Código Civil y el Código de Comercio de la República del
                  Ecuador.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Si no está de acuerdo con alguno de estos términos, no debe
                  utilizar nuestro sitio web ni contratar nuestros servicios. El
                  uso continuado de nuestros servicios o sitio web tras la
                  publicación de cambios en estos términos constituye la
                  aceptación de dichos cambios.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  By using the website or engaging the services of Quip Make It
                  Work (&quot;Quip&quot;, &quot;we&quot;, &quot;our&quot;), you
                  (&quot;Client&quot;, &quot;you&quot;) agree to be bound by
                  these Terms and Conditions. These terms constitute a legally
                  binding agreement between you and Quip Make It Work, domiciled
                  in Quito, Republic of Ecuador, governed by the Código Civil
                  and Código de Comercio of the Republic of Ecuador.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  If you do not agree with any of these terms, you must not use
                  our website or engage our services. Continued use of our
                  services or website following the posting of changes to these
                  terms constitutes acceptance of those changes.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 2. Scope of Services ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "2. Alcance de los Servicios" : "2. Scope of Services"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip proporciona servicios de inteligencia artificial,
                  automatización y desarrollo de software según se defina en una
                  Declaración de Trabajo (&quot;SOW&quot;) mutuamente acordada
                  para cada proyecto. Nuestros servicios incluyen, entre otros:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>Chatbots y asistentes de IA</li>
                  <li>Automatización de procesos empresariales</li>
                  <li>Integración de sistemas y APIs</li>
                  <li>Aplicaciones web y plataformas digitales</li>
                  <li>Consultoría en inteligencia artificial</li>
                  <li>Enjambres de agentes de IA (agent swarms)</li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Cada SOW definirá el alcance específico del trabajo, los
                  entregables, el cronograma y las tarifas aplicables. Cualquier
                  trabajo fuera del alcance definido en la SOW requerirá una
                  enmienda por escrito o una nueva SOW.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  El Cliente se compromete a proporcionar acceso oportuno a la
                  información, los sistemas y el personal necesarios para la
                  ejecución de los servicios. Los retrasos causados por el
                  Cliente podrán resultar en ajustes al cronograma y/o a los
                  costos del proyecto.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip provides artificial intelligence, automation, and
                  software development services as defined in a mutually agreed
                  Statement of Work (&quot;SOW&quot;) for each project. Our
                  services include, but are not limited to:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>AI chatbots and assistants</li>
                  <li>Business process automation</li>
                  <li>System and API integration</li>
                  <li>Web applications and digital platforms</li>
                  <li>Artificial intelligence consulting</li>
                  <li>AI agent swarms</li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Each SOW will define the specific scope of work, deliverables,
                  timeline, and applicable fees. Any work outside the scope
                  defined in the SOW will require a written amendment or a new
                  SOW.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  The Client agrees to provide timely access to information,
                  systems, and personnel necessary for the execution of
                  services. Delays caused by the Client may result in schedule
                  and/or cost adjustments to the project.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 3. Intellectual Property ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "3. Propiedad Intelectual" : "3. Intellectual Property"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Entregables personalizados:
                  </strong>{" "}
                  Una vez recibido el pago completo, el Cliente será titular de
                  todos los derechos de propiedad intelectual sobre los
                  entregables personalizados creados específicamente para el
                  Cliente según la SOW correspondiente.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Herramientas de Quip:
                  </strong>{" "}
                  Quip retiene todos los derechos sobre sus herramientas,
                  frameworks, bibliotecas, metodologías y propiedad intelectual
                  preexistente (&quot;Herramientas de Quip&quot;). Cuando las
                  Herramientas de Quip se incorporen en los entregables del
                  Cliente, Quip otorga al Cliente una licencia perpetua, no
                  exclusiva e intransferible para usar dichas Herramientas
                  únicamente como parte del entregable.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Conocimiento general:
                  </strong>{" "}
                  Quip se reserva el derecho de utilizar los conocimientos
                  generales, técnicas y experiencia adquiridos durante la
                  ejecución del proyecto para futuros trabajos, siempre que no
                  se divulgue información confidencial del Cliente.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">Código abierto:</strong>{" "}
                  Los componentes de código abierto incorporados en los
                  entregables estarán sujetos a sus licencias originales
                  respectivas. El Cliente es responsable de garantizar que los
                  resultados generados por IA no infrinjan la propiedad
                  intelectual de terceros.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Custom deliverables:
                  </strong>{" "}
                  Upon receipt of full payment, the Client shall own all
                  intellectual property rights in the custom deliverables
                  created specifically for the Client under the applicable SOW.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">Quip Tools:</strong>{" "}
                  Quip retains all rights to its pre-existing tools, frameworks,
                  libraries, methodologies, and intellectual property
                  (&quot;Quip Tools&quot;). Where Quip Tools are incorporated
                  into Client deliverables, Quip grants the Client a perpetual,
                  non-exclusive, non-transferable license to use such Quip Tools
                  solely as part of the deliverable.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    General knowledge:
                  </strong>{" "}
                  Quip reserves the right to use the general knowledge,
                  techniques, and experience gained during project execution for
                  future work, provided that no confidential information of the
                  Client is disclosed.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">Open source:</strong>{" "}
                  Open-source components incorporated into deliverables shall
                  remain subject to their respective original licenses. The
                  Client is responsible for ensuring that AI-generated outputs
                  do not infringe third-party intellectual property rights.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 4. Payment Terms ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "4. Condiciones de Pago" : "4. Payment Terms"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Salvo que se acuerde lo contrario en la SOW, la estructura de
                  pago predeterminada es 50/50: el 50&nbsp;% del monto total del
                  proyecto se paga por adelantado antes del inicio del trabajo,
                  y el 50&nbsp;% restante se paga al completar y entregar el
                  proyecto. Las estructuras de pago alternativas podrán
                  acordarse por escrito en cada SOW individual.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Todas las facturas se emiten en dólares estadounidenses (USD)
                  y son pagaderas dentro de los quince (15) días calendario a
                  partir de la fecha de emisión. Los pagos atrasados generarán
                  un interés del 1.5&nbsp;% mensual sobre el saldo pendiente,
                  calculado desde la fecha de vencimiento hasta la fecha de pago
                  efectivo.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip se reserva el derecho de suspender los servicios en caso
                  de facturas vencidas por más de treinta (30) días. El Cliente
                  es responsable de todos los impuestos aplicables, incluyendo
                  las obligaciones tributarias ante el Servicio de Rentas
                  Internas (SRI) del Ecuador, excluyendo los impuestos sobre la
                  renta de Quip.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Unless otherwise agreed in the SOW, the default payment
                  structure is 50/50: 50% of the total project amount is due
                  upfront before work begins, and the remaining 50% is due upon
                  completion and delivery of the project. Alternative payment
                  structures may be agreed in writing within each individual
                  SOW.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  All invoices are issued in United States Dollars (USD) and are
                  payable within fifteen (15) calendar days from the date of
                  issuance. Late payments shall accrue interest at a rate of
                  1.5% per month on the outstanding balance, calculated from the
                  due date until the date of actual payment.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip reserves the right to suspend services in the event of
                  invoices overdue by more than thirty (30) days. The Client is
                  responsible for all applicable taxes, including tax
                  obligations before Ecuador&apos;s Servicio de Rentas Internas
                  (SRI), excluding Quip&apos;s income taxes.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 5. Warranties & Disclaimers ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs
                ? "5. Garantías y Exclusiones"
                : "5. Warranties & Disclaimers"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip garantiza que los servicios se realizarán de manera
                  profesional y conforme a los estándares de la industria. Sin
                  embargo, debido a la naturaleza probabilística de los modelos
                  de inteligencia artificial, los resultados generados por IA se
                  proporcionan &quot;tal cual&quot; (&quot;as-is&quot;).
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip no garantiza la precisión, integridad ni idoneidad para
                  un propósito específico de los resultados generados por IA. El
                  Cliente es responsable de validar e implementar cualquier
                  resultado de IA según su propio criterio y juicio profesional.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip no garantiza el funcionamiento ininterrumpido ni libre de
                  errores de los entregables. La disponibilidad de APIs y
                  servicios de terceros no está garantizada por Quip. En la
                  máxima medida permitida por la legislación ecuatoriana, Quip
                  renuncia a todas las garantías implícitas, incluyendo, sin
                  limitación, las garantías de comerciabilidad e idoneidad para
                  un propósito particular.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip warrants that services will be performed in a
                  professional manner consistent with industry standards.
                  However, due to the probabilistic nature of artificial
                  intelligence models, AI-generated outputs are provided
                  &quot;as-is.&quot;
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip does not warrant the accuracy, completeness, or fitness
                  for a specific purpose of AI-generated outputs. The Client is
                  responsible for validating and implementing any AI outputs at
                  their own discretion and professional judgment.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip does not warrant uninterrupted or error-free operation of
                  deliverables. Third-party API and service availability is not
                  guaranteed by Quip. To the maximum extent permitted by
                  Ecuadorian law, Quip disclaims all implied warranties,
                  including, without limitation, warranties of merchantability
                  and fitness for a particular purpose.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 6. Limitation of Liability ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs
                ? "6. Limitación de Responsabilidad"
                : "6. Limitation of Liability"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  La responsabilidad total acumulada de Quip por todas las
                  reclamaciones relacionadas con los servicios no excederá el
                  monto total de los honorarios pagados por el Cliente a Quip
                  durante los doce (12) meses anteriores a la reclamación.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip no será responsable por daños indirectos, incidentales,
                  especiales, consecuentes o punitivos, incluyendo, entre otros,
                  pérdida de beneficios, pérdida de datos, interrupción del
                  negocio o pérdida de oportunidades comerciales.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Específico para IA:
                  </strong>{" "}
                  Quip no será responsable por decisiones tomadas con base en
                  resultados generados por IA. El Cliente asume el riesgo de
                  implementar recomendaciones de IA en su operación.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Las limitaciones de responsabilidad establecidas en esta
                  sección no se aplicarán en casos de dolo (conducta
                  intencional) o culpa grave, conforme a lo dispuesto en el
                  Código Civil del Ecuador.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip&apos;s total cumulative liability for all claims related
                  to the services shall not exceed the total amount of fees paid
                  by the Client to Quip during the twelve (12) months preceding
                  the claim.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip shall not be liable for indirect, incidental, special,
                  consequential, or punitive damages, including but not limited
                  to loss of profits, loss of data, business interruption, or
                  loss of business opportunities.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">AI-specific:</strong>{" "}
                  Quip shall not be liable for decisions made based on
                  AI-generated outputs. The Client assumes the risk of
                  implementing AI recommendations in their operations.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  The limitations of liability set forth in this section shall
                  not apply in cases of intentional misconduct (dolo) or gross
                  negligence, as provided under Ecuador&apos;s Código Civil.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 7. Data Processing Agreement ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs
                ? "7. Acuerdo de Procesamiento de Datos"
                : "7. Data Processing Agreement"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Cuando Quip procese datos de los usuarios finales del Cliente,
                  Quip actuará como &quot;encargado del tratamiento&quot; según
                  lo establecido en la Ley Orgánica de Protección de Datos
                  Personales del Ecuador (LOPDP). Quip procesará los datos
                  personales únicamente conforme a las instrucciones
                  documentadas del Cliente.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip se compromete a:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Implementar medidas técnicas y organizativas de seguridad
                    apropiadas para proteger los datos personales
                  </li>
                  <li>
                    Notificar al Cliente de cualquier violación de seguridad de
                    datos dentro de las setenta y dos (72) horas siguientes a su
                    detección
                  </li>
                  <li>
                    Asistir al Cliente en la atención de solicitudes de derechos
                    ARCO (Acceso, Rectificación, Cancelación y Oposición)
                  </li>
                  <li>
                    Eliminar o devolver todos los datos personales al finalizar
                    el contrato, según lo instruya el Cliente
                  </li>
                  <li>
                    Utilizar sub-procesadores únicamente con el consentimiento
                    previo y por escrito del Cliente
                  </li>
                  <li>
                    Poner a disposición del Cliente una evaluación de seguridad
                    anual, previa solicitud
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  When Quip processes the Client&apos;s end-user data, Quip
                  shall act as &quot;encargado del tratamiento&quot; (data
                  processor) under Ecuador&apos;s Ley Orgánica de Protección de
                  Datos Personales (LOPDP). Quip shall process personal data
                  only in accordance with the Client&apos;s documented
                  instructions.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip commits to:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Implement appropriate technical and organizational security
                    measures to protect personal data
                  </li>
                  <li>
                    Notify the Client of any data breach within seventy-two (72)
                    hours of detection
                  </li>
                  <li>
                    Assist the Client with ARCO rights requests (Access,
                    Rectification, Cancellation, and Opposition)
                  </li>
                  <li>
                    Delete or return all personal data upon contract
                    termination, as instructed by the Client
                  </li>
                  <li>
                    Engage sub-processors only with prior written consent of the
                    Client
                  </li>
                  <li>
                    Make an annual security assessment available upon request
                  </li>
                </ul>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 8. Confidentiality ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "8. Confidencialidad" : "8. Confidentiality"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Ambas partes se comprometen a mantener estricta
                  confidencialidad sobre toda la información propietaria,
                  técnica, comercial y financiera intercambiada durante la
                  relación contractual (&quot;Información Confidencial&quot;).
                  Esto incluye, sin limitación, código fuente, datos de
                  clientes, estrategias comerciales, procesos internos y
                  cualquier información marcada como confidencial.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Las obligaciones de confidencialidad sobreviven a la
                  terminación de la relación contractual por un período de dos
                  (2) años. La Información Confidencial no podrá ser divulgada a
                  terceros sin el consentimiento previo y por escrito de la
                  parte divulgante, salvo cuando sea requerido por ley o por
                  orden judicial.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  No se considerará Información Confidencial aquella que: (a)
                  sea o se convierta en información de dominio público sin culpa
                  de la parte receptora; (b) ya estuviera en posesión legítima
                  de la parte receptora antes de su divulgación; (c) sea
                  desarrollada independientemente sin uso de la Información
                  Confidencial; o (d) sea recibida legítimamente de un tercero
                  sin restricciones de confidencialidad.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Las partes podrán complementar estas disposiciones mediante un
                  Acuerdo de No Divulgación (NDA) independiente.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Both parties agree to maintain strict confidentiality
                  regarding all proprietary, technical, commercial, and
                  financial information exchanged during the contractual
                  relationship (&quot;Confidential Information&quot;). This
                  includes, without limitation, source code, client data,
                  business strategies, internal processes, and any information
                  marked as confidential.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Confidentiality obligations survive termination of the
                  contractual relationship for a period of two (2) years.
                  Confidential Information may not be disclosed to third parties
                  without the prior written consent of the disclosing party,
                  except when required by law or court order.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Information shall not be considered Confidential Information
                  if it: (a) is or becomes publicly available through no fault
                  of the receiving party; (b) was already legitimately in the
                  possession of the receiving party prior to disclosure; (c) is
                  independently developed without the use of the Confidential
                  Information; or (d) is legitimately received from a third
                  party without confidentiality restrictions.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  The parties may supplement these provisions with a separate
                  Non-Disclosure Agreement (NDA).
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 9. Indemnification ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "9. Indemnización" : "9. Indemnification"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    El Cliente indemnizará a Quip
                  </strong>{" "}
                  por cualquier reclamación, daño, pérdida o gasto derivado de:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Datos o contenido proporcionado por el Cliente que infrinja
                    derechos de propiedad intelectual de terceros
                  </li>
                  <li>
                    El uso de los entregables por parte del Cliente más allá del
                    alcance acordado
                  </li>
                  <li>
                    El incumplimiento del Cliente de la legislación aplicable en
                    relación con el despliegue de soluciones de IA
                  </li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Quip indemnizará al Cliente
                  </strong>{" "}
                  por cualquier reclamación derivada de: (a) infracción de
                  propiedad intelectual de terceros por las Herramientas de
                  Quip; o (b) negligencia grave de Quip en la prestación de
                  servicios.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Las obligaciones de indemnización están sujetas a: (a)
                  notificación oportuna de la reclamación; (b) cooperación
                  razonable de la parte indemnizada; y (c) control de la defensa
                  por la parte indemnizante.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    The Client shall indemnify Quip
                  </strong>{" "}
                  against any claims, damages, losses, or expenses arising from:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Data or content provided by the Client that infringes
                    third-party intellectual property rights
                  </li>
                  <li>
                    The Client&apos;s use of deliverables beyond the agreed
                    scope
                  </li>
                  <li>
                    The Client&apos;s failure to comply with applicable law
                    regarding AI deployment
                  </li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Quip shall indemnify the Client
                  </strong>{" "}
                  against any claims arising from: (a) infringement of
                  third-party intellectual property by Quip Tools; or (b)
                  Quip&apos;s gross negligence in the performance of services.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Indemnification obligations are subject to: (a) prompt notice
                  of the claim; (b) reasonable cooperation by the indemnified
                  party; and (c) control of the defense by the indemnifying
                  party.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 10. Force Majeure ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "10. Fuerza Mayor" : "10. Force Majeure"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Ninguna de las partes será responsable por el incumplimiento o
                  retraso en el cumplimiento de sus obligaciones cuando dicho
                  incumplimiento o retraso sea causado por eventos fuera de su
                  control razonable, incluyendo, entre otros:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Desastres naturales (terremotos, inundaciones, erupciones
                    volcánicas)
                  </li>
                  <li>Pandemias o emergencias sanitarias</li>
                  <li>Acciones gubernamentales, embargos o sanciones</li>
                  <li>
                    Fallas de infraestructura de internet o telecomunicaciones
                  </li>
                  <li>Ciberataques o incidentes de seguridad informática</li>
                  <li>Interrupciones en servicios de proveedores de IA</li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  La parte afectada deberá notificar a la otra parte dentro de
                  los cinco (5) días hábiles siguientes al inicio del evento de
                  fuerza mayor. Si el evento de fuerza mayor se extiende por más
                  de sesenta (60) días, cualquiera de las partes podrá dar por
                  terminado el contrato.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Neither party shall be liable for failure or delay in
                  performing its obligations when such failure or delay is
                  caused by events beyond its reasonable control, including but
                  not limited to:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Natural disasters (earthquakes, floods, volcanic eruptions)
                  </li>
                  <li>Pandemics or health emergencies</li>
                  <li>Government actions, embargoes, or sanctions</li>
                  <li>
                    Internet or telecommunications infrastructure failures
                  </li>
                  <li>Cyberattacks or information security incidents</li>
                  <li>AI provider service disruptions</li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  The affected party must notify the other party within five (5)
                  business days of the onset of the force majeure event. If the
                  force majeure event continues for more than sixty (60) days,
                  either party may terminate the agreement.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 11. AI Regulatory Compliance ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs
                ? "11. Cumplimiento Regulatorio de IA"
                : "11. AI Regulatory Compliance"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  El Cliente es responsable del cumplimiento regulatorio del
                  despliegue de soluciones de IA en su jurisdicción. Quip
                  proporciona la implementación técnica según lo definido en la
                  SOW, pero no asume responsabilidad por el cumplimiento
                  regulatorio del uso de los entregables por parte del Cliente.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  El Cliente debe garantizar que el uso de soluciones de IA
                  cumpla con las normativas de protección al consumidor,
                  antidiscriminación y regulaciones sectoriales específicas
                  aplicables a su industria.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip informará al Cliente sobre los requisitos regulatorios
                  conocidos en Ecuador, incluyendo los marcos de gobernanza
                  digital del Ecuador. Ambas partes se comprometen a adherirse a
                  principios de uso ético de la inteligencia artificial,
                  incluyendo transparencia, equidad y responsabilidad en el
                  despliegue de sistemas de IA.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  The Client is responsible for regulatory compliance of AI
                  deployment in their jurisdiction. Quip provides technical
                  implementation as defined in the SOW but does not assume
                  responsibility for regulatory compliance of the Client&apos;s
                  use of deliverables.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  The Client must ensure that AI use complies with consumer
                  protection, anti-discrimination, and sector-specific
                  regulations applicable to their industry.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Quip will inform the Client of known regulatory requirements
                  in Ecuador, including Ecuador&apos;s digital governance
                  frameworks. Both parties commit to adhering to ethical AI use
                  principles, including transparency, fairness, and
                  accountability in the deployment of AI systems.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 12. Termination ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "12. Terminación" : "12. Termination"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Cualquiera de las partes podrá terminar la relación
                  contractual mediante notificación escrita con quince (15) días
                  calendario de anticipación. En caso de terminación, el Cliente
                  deberá pagar por todo el trabajo completado hasta la fecha de
                  terminación efectiva. Quip reembolsará la porción proporcional
                  correspondiente al trabajo no realizado, menos los gastos
                  razonables ya incurridos.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Terminación inmediata:
                  </strong>{" "}
                  Quip podrá terminar el contrato de forma inmediata en caso de:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Incumplimiento material por parte del Cliente que no sea
                    subsanado dentro de los diez (10) días siguientes a la
                    notificación
                  </li>
                  <li>Falta de pago por más de treinta (30) días</li>
                  <li>Insolvencia o quiebra del Cliente</li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">Supervivencia:</strong>{" "}
                  Las siguientes secciones sobrevivirán a la terminación del
                  contrato: Propiedad Intelectual, Confidencialidad, Limitación
                  de Responsabilidad, Indemnización y Ley Aplicable.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Either party may terminate the contractual relationship by
                  providing fifteen (15) calendar days&apos; written notice.
                  Upon termination, the Client shall pay for all work completed
                  up to the effective date of termination. Quip will refund the
                  pro-rata portion corresponding to work not performed, less
                  reasonable expenses already incurred.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Immediate termination:
                  </strong>{" "}
                  Quip may terminate the agreement immediately in the event of:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Material breach by the Client that is not cured within ten
                    (10) days of notice
                  </li>
                  <li>Non-payment for more than thirty (30) days</li>
                  <li>Insolvency or bankruptcy of the Client</li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">Survival:</strong> The
                  following sections shall survive termination of the agreement:
                  Intellectual Property, Confidentiality, Limitation of
                  Liability, Indemnification, and Governing Law.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 13. Governing Law & Dispute Resolution ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs
                ? "13. Ley Aplicable y Resolución de Disputas"
                : "13. Governing Law & Dispute Resolution"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Estos Términos y Condiciones se regirán e interpretarán de
                  conformidad con las leyes de la República del Ecuador,
                  incluyendo el Código Civil, el Código de Comercio, la Ley
                  Orgánica de Protección de Datos Personales (LOPDP) y la Ley de
                  Comercio Electrónico, Firmas y Mensajes de Datos.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Cualquier controversia, disputa o reclamación derivada de o
                  relacionada con estos Términos, incluyendo su validez,
                  interpretación, ejecución o terminación, será resuelta
                  mediante arbitraje administrado por la Cámara de Comercio de
                  Quito, de conformidad con su reglamento de arbitraje vigente.
                  El tribunal arbitral estará compuesto por un (1) árbitro, el
                  idioma del arbitraje será el español y la sede será Quito,
                  Ecuador.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Antes de iniciar el proceso de arbitraje, las partes se
                  comprometen a realizar esfuerzos de buena fe para resolver la
                  controversia mediante negociación directa durante un período
                  de treinta (30) días a partir de la notificación escrita de la
                  disputa. Cada parte asumirá sus propios costos de arbitraje;
                  la parte vencedora podrá recuperar los honorarios razonables
                  incurridos.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  These Terms and Conditions shall be governed by and construed
                  in accordance with the laws of the Republic of Ecuador,
                  including the Código Civil, Código de Comercio, Ley Orgánica
                  de Protección de Datos Personales (LOPDP), and the Ley de
                  Comercio Electrónico, Firmas y Mensajes de Datos.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Any controversy, dispute, or claim arising out of or relating
                  to these Terms, including their validity, interpretation,
                  performance, or termination, shall be resolved through
                  arbitration administered by the Cámara de Comercio de Quito
                  (Chamber of Commerce of Quito), in accordance with its
                  arbitration rules in effect. The arbitral tribunal shall
                  consist of one (1) arbitrator, the language of arbitration
                  shall be Spanish, and the seat shall be Quito, Ecuador.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Prior to initiating arbitration proceedings, the parties agree
                  to make good faith efforts to resolve the dispute through
                  direct negotiation for a period of thirty (30) days from
                  written notice of the dispute. Each party shall bear its own
                  arbitration costs; the prevailing party may recover reasonable
                  fees incurred.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 14. Severability & Waiver ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs
                ? "14. Divisibilidad y Renuncia"
                : "14. Severability & Waiver"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Si alguna disposición de estos Términos y Condiciones fuera
                  declarada inválida, ilegal o inaplicable por un tribunal
                  competente o un árbitro, las disposiciones restantes
                  continuarán en pleno vigor y efecto. La disposición inválida
                  será reemplazada por una disposición válida que se aproxime lo
                  más posible a la intención económica y legal de la disposición
                  original.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  La falta de ejercicio o la demora en el ejercicio de cualquier
                  derecho bajo estos Términos no constituirá una renuncia a
                  dicho derecho. Cualquier renuncia deberá ser otorgada por
                  escrito para ser válida y efectiva.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  If any provision of these Terms and Conditions is held to be
                  invalid, illegal, or unenforceable by a competent court or
                  arbitrator, the remaining provisions shall continue in full
                  force and effect. The invalid provision shall be replaced with
                  a valid provision that most closely approximates the economic
                  and legal intent of the original provision.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Failure to exercise or delay in exercising any right under
                  these Terms shall not constitute a waiver of that right. Any
                  waiver must be given in writing to be valid and effective.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── 15. Entire Agreement & Amendments ───── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs
                ? "15. Acuerdo Completo y Modificaciones"
                : "15. Entire Agreement & Amendments"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Estos Términos y Condiciones, junto con la(s) SOW(s)
                  aplicable(s), constituyen el acuerdo completo entre las partes
                  en relación con el objeto aquí tratado y reemplazan todos los
                  acuerdos, negociaciones y comunicaciones previas, ya sean
                  orales o escritas.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Las modificaciones a estos Términos requieren el
                  consentimiento por escrito de ambas partes. Quip podrá
                  actualizar estos Términos con treinta (30) días de
                  anticipación mediante notificación al Cliente. El uso
                  continuado de los servicios tras la notificación de cambios
                  constituirá la aceptación de los Términos actualizados.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  These Terms and Conditions, together with the applicable
                  SOW(s), constitute the entire agreement between the parties
                  with respect to the subject matter hereof and supersede all
                  prior agreements, negotiations, and communications, whether
                  oral or written.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Amendments to these Terms require written consent of both
                  parties. Quip may update these Terms with thirty (30)
                  days&apos; notice to the Client. Continued use of services
                  following notification of changes shall constitute acceptance
                  of the updated Terms.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ───── Contact ───── */}
            <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
              {isEs
                ? "Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor contáctenos en "
                : "If you have any questions about these Terms and Conditions, please contact us at "}
              <strong className="text-text-primary">hello@quip.ec</strong>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

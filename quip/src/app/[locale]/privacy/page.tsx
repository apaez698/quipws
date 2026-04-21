"use client";

import { useParams } from "next/navigation";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export default function PrivacyPage() {
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
              {isEs ? "Política de Privacidad" : "Privacy Policy"}
            </h1>

            <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
              {isEs
                ? "Última actualización: Abril 2026"
                : "Last updated: April 2026"}
            </p>

            {/* ─── 1. Data Controller ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "1. Responsable del Tratamiento" : "1. Data Controller"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  El responsable del tratamiento de sus datos personales es{" "}
                  <strong className="text-text-primary">
                    Quip Make It Work
                  </strong>{" "}
                  (&quot;Quip&quot;, &quot;nosotros&quot;, &quot;nuestro&quot;),
                  con domicilio en Quito, Ecuador.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">Contacto:</strong>{" "}
                  hello@quip.ec
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Delegado de Protección de Datos (DPD):
                  </strong>{" "}
                  hello@quip.ec (asunto: &quot;PROTECCIÓN DE
                  DATOS&quot;)
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Esta Política de Privacidad se rige por la{" "}
                  <strong className="text-text-primary">
                    Ley Orgánica de Protección de Datos Personales (LOPDP)
                  </strong>{" "}
                  del Ecuador, publicada en el Registro Oficial Suplemento
                  No.&nbsp;459 de 26 de mayo de 2021, y su Reglamento de
                  aplicación. Todo tratamiento de datos personales realizado por
                  Quip Make It Work se ajusta a los principios y obligaciones
                  establecidos en dicha normativa.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  The data controller responsible for your personal data is{" "}
                  <strong className="text-text-primary">
                    Quip Make It Work
                  </strong>{" "}
                  (&quot;Quip&quot;, &quot;we&quot;, &quot;our&quot;), domiciled
                  in Quito, Ecuador.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">Contact:</strong>{" "}
                  hello@quip.ec
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Data Protection Officer (DPO):
                  </strong>{" "}
                  hello@quip.ec (subject: &quot;DATA
                  PROTECTION&quot;)
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  This Privacy Policy is governed by Ecuador&apos;s{" "}
                  <strong className="text-text-primary">
                    Ley Orgánica de Protección de Datos Personales (LOPDP)
                  </strong>
                  , published in the Registro Oficial Suplemento No.&nbsp;459 of
                  May 26, 2021, and its implementing Regulations. All processing
                  of personal data by Quip Make It Work complies with the
                  principles and obligations established therein.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 2. Data We Collect ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "2. Datos que Recopilamos" : "2. Data We Collect"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  En virtud del principio de minimización de datos consagrado en
                  el Art.&nbsp;10 de la LOPDP, recopilamos únicamente los datos
                  personales estrictamente necesarios para las finalidades
                  descritas en esta política. Las categorías de datos que
                  tratamos son las siguientes:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Información de contacto:
                    </strong>{" "}
                    nombre, dirección de correo electrónico, número de teléfono,
                    nombre de la empresa u organización.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Detalles del proyecto:
                    </strong>{" "}
                    descripciones de proyectos, requisitos técnicos,
                    presupuestos estimados, cronogramas y cualquier
                    documentación que usted comparta en relación con los
                    servicios solicitados.
                  </li>
                  <li>
                    <strong className="text-text-primary">Datos de uso:</strong>{" "}
                    dirección IP, tipo y versión del navegador, sistema
                    operativo, páginas visitadas, tiempo de permanencia en cada
                    página, URL de referencia y otros datos de navegación
                    recopilados automáticamente.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Datos de interacción con chatbot:
                    </strong>{" "}
                    mensajes, consultas, registros de conversación y cualquier
                    información que usted proporcione durante interacciones con
                    nuestros asistentes de inteligencia artificial.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Datos técnicos:
                    </strong>{" "}
                    información del dispositivo, resolución de pantalla, tipo de
                    conexión, zona horaria y configuración de idioma del
                    navegador.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Datos de comunicación:
                    </strong>{" "}
                    correos electrónicos intercambiados, notas de reuniones,
                    tickets de soporte y cualquier otra correspondencia
                    relacionada con la prestación de servicios.
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  In accordance with the principle of data minimization
                  established in Art.&nbsp;10 of the LOPDP, we collect only the
                  personal data strictly necessary for the purposes described in
                  this policy. The categories of data we process are as follows:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Contact information:
                    </strong>{" "}
                    name, email address, phone number, company or organization
                    name.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Project details:
                    </strong>{" "}
                    project descriptions, technical requirements, estimated
                    budgets, timelines, and any documentation you share in
                    connection with requested services.
                  </li>
                  <li>
                    <strong className="text-text-primary">Usage data:</strong>{" "}
                    IP address, browser type and version, operating system,
                    pages visited, time spent on each page, referring URL, and
                    other browsing data collected automatically.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Chatbot interaction data:
                    </strong>{" "}
                    messages, queries, conversation logs, and any information
                    you provide during interactions with our artificial
                    intelligence assistants.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Technical data:
                    </strong>{" "}
                    device information, screen resolution, connection type, time
                    zone, and browser language settings.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Communication data:
                    </strong>{" "}
                    emails exchanged, meeting notes, support tickets, and any
                    other correspondence related to service delivery.
                  </li>
                </ul>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 3. Legal Basis ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "3. Base Legal" : "3. Legal Basis"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  De conformidad con el Art.&nbsp;7 de la LOPDP, tratamos sus
                  datos personales bajo las siguientes bases legales:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Consentimiento (Art.&nbsp;7 literal a):
                    </strong>{" "}
                    cuando usted nos proporciona voluntariamente sus datos a
                    través de formularios de contacto, interacciones con nuestro
                    chatbot o suscripciones a boletines informativos.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Ejecución contractual (Art.&nbsp;7 literal b):
                    </strong>{" "}
                    cuando el tratamiento es necesario para la ejecución de un
                    contrato del que usted es parte, o para la aplicación de
                    medidas precontractuales adoptadas a su solicitud.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Obligación legal (Art.&nbsp;7 literal c):
                    </strong>{" "}
                    cuando el tratamiento es necesario para el cumplimiento de
                    obligaciones legales aplicables, incluyendo obligaciones
                    tributarias ante el Servicio de Rentas Internas (SRI) y el
                    cumplimiento de la propia LOPDP.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Interés legítimo (Art.&nbsp;7 literal d):
                    </strong>{" "}
                    cuando el tratamiento es necesario para satisfacer intereses
                    legítimos perseguidos por Quip Make It Work, tales como la
                    mejora de nuestros servicios, la seguridad de nuestros
                    sistemas y la prevención de fraude, siempre que dichos
                    intereses no prevalezcan sobre sus derechos y libertades
                    fundamentales.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Interés vital (Art.&nbsp;7 literal e):
                    </strong>{" "}
                    en circunstancias excepcionales donde el tratamiento sea
                    necesario para proteger intereses vitales del titular o de
                    otra persona natural.
                  </li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  De conformidad con el Art.&nbsp;8 de la LOPDP, usted tiene
                  derecho a retirar su consentimiento en cualquier momento sin
                  que ello afecte la licitud del tratamiento basado en el
                  consentimiento previo a su retirada.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  In accordance with Art.&nbsp;7 of the LOPDP, we process your
                  personal data under the following legal bases:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Consent (Art.&nbsp;7(a)):
                    </strong>{" "}
                    when you voluntarily provide your data through contact
                    forms, chatbot interactions, or newsletter subscriptions.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Contract performance (Art.&nbsp;7(b)):
                    </strong>{" "}
                    when processing is necessary for the performance of a
                    contract to which you are a party, or for the implementation
                    of pre-contractual measures taken at your request.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Legal obligation (Art.&nbsp;7(c)):
                    </strong>{" "}
                    when processing is necessary for compliance with applicable
                    legal obligations, including tax obligations before the
                    Servicio de Rentas Internas (SRI) and compliance with the
                    LOPDP itself.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Legitimate interest (Art.&nbsp;7(d)):
                    </strong>{" "}
                    when processing is necessary for legitimate interests
                    pursued by Quip Make It Work, such as improving our
                    services, securing our systems, and preventing fraud,
                    provided that such interests do not override your
                    fundamental rights and freedoms.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Vital interest (Art.&nbsp;7(e)):
                    </strong>{" "}
                    in exceptional circumstances where processing is necessary
                    to protect the vital interests of the data subject or
                    another natural person.
                  </li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  In accordance with Art.&nbsp;8 of the LOPDP, you have the
                  right to withdraw your consent at any time without affecting
                  the lawfulness of processing based on consent prior to its
                  withdrawal.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 4. Purposes of Processing ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs
                ? "4. Finalidades del Tratamiento"
                : "4. Purposes of Processing"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Tratamos sus datos personales para las siguientes finalidades
                  específicas:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Responder a sus consultas y proporcionar cotizaciones de
                    servicios.
                  </li>
                  <li>Ejecutar y gestionar los servicios contratados.</li>
                  <li>
                    Procesar pagos y emitir facturas conforme a la legislación
                    tributaria ecuatoriana.
                  </li>
                  <li>
                    Enviar comunicaciones relacionadas con el servicio
                    (actualizaciones de proyectos, informes de progreso,
                    notificaciones técnicas).
                  </li>
                  <li>
                    Mejorar nuestros servicios mediante análisis de uso y
                    rendimiento de la plataforma.
                  </li>
                  <li>
                    Garantizar la seguridad de nuestra plataforma y prevenir
                    actividades fraudulentas o no autorizadas.
                  </li>
                  <li>
                    Cumplir con obligaciones legales, tributarias y regulatorias
                    aplicables.
                  </li>
                  <li>
                    Enviar comunicaciones comerciales y de marketing (únicamente
                    con su consentimiento explícito y previo).
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  We process your personal data for the following specific
                  purposes:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>Respond to your inquiries and provide service quotes.</li>
                  <li>Execute and manage contracted services.</li>
                  <li>
                    Process payments and issue invoices in accordance with
                    Ecuadorian tax legislation.
                  </li>
                  <li>
                    Send service-related communications (project updates,
                    progress reports, technical notifications).
                  </li>
                  <li>
                    Improve our services through platform usage and performance
                    analytics.
                  </li>
                  <li>
                    Ensure platform security and prevent fraudulent or
                    unauthorized activities.
                  </li>
                  <li>
                    Comply with applicable legal, tax, and regulatory
                    obligations.
                  </li>
                  <li>
                    Send marketing and promotional communications (only with
                    your explicit, prior consent).
                  </li>
                </ul>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 5. ARCO+ Rights ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "5. Derechos ARCO+" : "5. ARCO+ Rights"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  De conformidad con los Arts.&nbsp;17 a 22 de la LOPDP, usted
                  tiene los siguientes derechos sobre sus datos personales:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Acceso (Art.&nbsp;17):
                    </strong>{" "}
                    derecho a obtener una copia completa de sus datos personales
                    y los detalles del tratamiento, incluyendo finalidades,
                    categorías de datos, destinatarios y plazos de conservación.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Rectificación (Art.&nbsp;18):
                    </strong>{" "}
                    derecho a solicitar la corrección de datos personales
                    inexactos o incompletos que le conciernan.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Cancelación/Supresión (Art.&nbsp;19):
                    </strong>{" "}
                    derecho a solicitar la eliminación de sus datos personales
                    cuando ya no sean necesarios para los fines para los que
                    fueron recogidos, usted retire su consentimiento, o los
                    datos hayan sido tratados ilícitamente, sujeto a las
                    excepciones de retención legal aplicables.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Oposición (Art.&nbsp;20):
                    </strong>{" "}
                    derecho a oponerse al tratamiento de sus datos personales,
                    incluyendo la elaboración de perfiles, el tratamiento basado
                    en interés legítimo o con fines de mercadotecnia directa.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Portabilidad (Art.&nbsp;21):
                    </strong>{" "}
                    derecho a recibir sus datos personales en un formato
                    estructurado, de uso común y lectura mecánica, y a
                    transmitirlos a otro responsable del tratamiento.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      No ser objeto de decisiones automatizadas (Art.&nbsp;22):
                    </strong>{" "}
                    derecho a no ser objeto de una decisión basada únicamente en
                    el tratamiento automatizado, incluida la elaboración de
                    perfiles, que produzca efectos jurídicos sobre usted o le
                    afecte significativamente de manera similar.
                  </li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Cómo ejercer sus derechos:
                  </strong>{" "}
                  envíe su solicitud a hello@quip.ec identificándose
                  debidamente y especificando el derecho que desea ejercer.
                  Responderemos dentro de un plazo máximo de quince (15) días
                  hábiles contados a partir de la recepción de la solicitud
                  completa. El ejercicio de estos derechos es gratuito. Deberá
                  verificar su identidad para procesar la solicitud. Si no está
                  satisfecho con nuestra respuesta, tiene derecho a presentar
                  una reclamación ante la autoridad de control competente.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  In accordance with Arts.&nbsp;17 through 22 of the LOPDP, you
                  have the following rights over your personal data:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Access (Art.&nbsp;17):
                    </strong>{" "}
                    the right to obtain a full copy of your personal data and
                    processing details, including purposes, data categories,
                    recipients, and retention periods.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Rectification (Art.&nbsp;18):
                    </strong>{" "}
                    the right to request the correction of inaccurate or
                    incomplete personal data concerning you.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Cancellation/Erasure (Art.&nbsp;19):
                    </strong>{" "}
                    the right to request deletion of your personal data when it
                    is no longer necessary for the purposes for which it was
                    collected, you withdraw consent, or data has been unlawfully
                    processed, subject to applicable legal retention exceptions.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Opposition (Art.&nbsp;20):
                    </strong>{" "}
                    the right to object to the processing of your personal data,
                    including profiling, processing based on legitimate
                    interest, or processing for direct marketing purposes.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Portability (Art.&nbsp;21):
                    </strong>{" "}
                    the right to receive your personal data in a structured,
                    commonly used, and machine-readable format, and to transmit
                    it to another data controller.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Right not to be subject to automated decisions
                      (Art.&nbsp;22):
                    </strong>{" "}
                    the right not to be subject to a decision based solely on
                    automated processing, including profiling, which produces
                    legal effects concerning you or similarly significantly
                    affects you.
                  </li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    How to exercise your rights:
                  </strong>{" "}
                  send your request to hello@quip.ec with proper
                  identification and specifying the right you wish to exercise.
                  We will respond within a maximum of fifteen (15) business days
                  from receipt of the complete request. The exercise of these
                  rights is free of charge. You must verify your identity for us
                  to process the request. If you are unsatisfied with our
                  response, you have the right to file a complaint with the
                  competent supervisory authority.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 6. Data Retention ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "6. Conservación de Datos" : "6. Data Retention"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Conservamos sus datos personales únicamente durante el tiempo
                  necesario para cumplir con las finalidades para las que fueron
                  recogidos. Los períodos específicos de conservación son los
                  siguientes:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Datos de contacto y proyecto:
                    </strong>{" "}
                    durante la vigencia de la relación contractual más cinco (5)
                    años adicionales para cumplir con obligaciones tributarias
                    ante el Servicio de Rentas Internas (SRI) del Ecuador.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Datos de uso y navegación:
                    </strong>{" "}
                    veinticuatro (24) meses desde su recopilación.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Registros de interacción con chatbot:
                    </strong>{" "}
                    doce (12) meses desde la interacción.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Registros de comunicación:
                    </strong>{" "}
                    tres (3) años desde la última comunicación.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Datos de pago y facturación:
                    </strong>{" "}
                    siete (7) años conforme a los requisitos del SRI.
                  </li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Una vez cumplidos los plazos de conservación, los datos
                  personales serán eliminados de forma segura o anonimizados de
                  manera irreversible, de modo que no sea posible la
                  identificación del titular.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  We retain your personal data only for as long as necessary to
                  fulfill the purposes for which it was collected. Specific
                  retention periods are as follows:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Contact and project data:
                    </strong>{" "}
                    duration of the contractual relationship plus five (5)
                    additional years to comply with tax obligations before
                    Ecuador&apos;s Servicio de Rentas Internas (SRI).
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Usage and browsing data:
                    </strong>{" "}
                    twenty-four (24) months from collection.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Chatbot interaction logs:
                    </strong>{" "}
                    twelve (12) months from the interaction.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Communication records:
                    </strong>{" "}
                    three (3) years from the last communication.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Payment and invoicing data:
                    </strong>{" "}
                    seven (7) years per SRI requirements.
                  </li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Once retention periods have been fulfilled, personal data will
                  be securely deleted or irreversibly anonymized so that
                  identification of the data subject is no longer possible.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 7. Security Measures ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "7. Medidas de Seguridad" : "7. Security Measures"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  De conformidad con el Art.&nbsp;37 de la LOPDP, Quip Make It
                  Work implementa medidas técnicas y organizativas apropiadas
                  para garantizar un nivel de seguridad adecuado al riesgo del
                  tratamiento, incluyendo:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Cifrado de datos en tránsito (TLS 1.3) y en reposo
                    (AES-256).
                  </li>
                  <li>
                    Controles de acceso basados en roles (RBAC) y principio de
                    mínimo privilegio.
                  </li>
                  <li>
                    Autenticación multifactor (MFA) para el acceso a sistemas
                    internos.
                  </li>
                  <li>
                    Evaluaciones regulares de vulnerabilidades y pruebas de
                    penetración.
                  </li>
                  <li>
                    Monitoreo continuo y sistemas de detección de intrusiones.
                  </li>
                  <li>
                    Capacitación periódica del personal en materia de protección
                    de datos personales.
                  </li>
                  <li>
                    Procedimientos documentados de respuesta ante incidentes de
                    seguridad.
                  </li>
                  <li>
                    Prácticas de desarrollo seguro alineadas con las directrices
                    de OWASP.
                  </li>
                  <li>
                    Seguridad física de la infraestructura garantizada por las
                    certificaciones de nuestros proveedores de servicios en la
                    nube (SOC 2, ISO 27001).
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  In accordance with Art.&nbsp;37 of the LOPDP, Quip Make It
                  Work implements appropriate technical and organizational
                  measures to ensure a level of security appropriate to the risk
                  of processing, including:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Encryption in transit (TLS 1.3) and at rest (AES-256).
                  </li>
                  <li>
                    Role-based access controls (RBAC) and principle of least
                    privilege.
                  </li>
                  <li>
                    Multi-factor authentication (MFA) for internal system
                    access.
                  </li>
                  <li>
                    Regular vulnerability assessments and penetration testing.
                  </li>
                  <li>
                    Continuous monitoring and intrusion detection systems.
                  </li>
                  <li>
                    Regular employee training on personal data protection.
                  </li>
                  <li>Documented incident response procedures.</li>
                  <li>
                    Secure development practices aligned with OWASP guidelines.
                  </li>
                  <li>
                    Physical infrastructure security ensured by cloud provider
                    certifications (SOC 2, ISO 27001).
                  </li>
                </ul>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 8. Data Breach Notification ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs
                ? "8. Notificación de Brechas de Seguridad"
                : "8. Data Breach Notification"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  De conformidad con el Art.&nbsp;39 de la LOPDP, en caso de una
                  brecha de seguridad que afecte datos personales, Quip Make It
                  Work se compromete a:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Notificar a la Superintendencia de Protección de Datos
                      Personales
                    </strong>{" "}
                    dentro de las setenta y dos (72) horas siguientes al
                    conocimiento de la brecha.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Notificar a los titulares afectados
                    </strong>{" "}
                    sin dilación indebida cuando la brecha suponga un alto
                    riesgo para sus derechos y libertades.
                  </li>
                  <li>
                    Incluir en la notificación: la naturaleza de la brecha, las
                    categorías y volumen aproximado de datos afectados, las
                    consecuencias probables y las medidas adoptadas o propuestas
                    para remediar la situación.
                  </li>
                  <li>
                    Mantener un equipo interno de respuesta ante brechas con
                    procedimientos documentados y revisados periódicamente.
                  </li>
                  <li>
                    Realizar una revisión posterior al incidente e implementar
                    las medidas correctivas necesarias para prevenir su
                    recurrencia.
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  In accordance with Art.&nbsp;39 of the LOPDP, in the event of
                  a security breach affecting personal data, Quip Make It Work
                  commits to:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Notify the Superintendencia de Protección de Datos
                      Personales
                    </strong>{" "}
                    within seventy-two (72) hours of becoming aware of the
                    breach.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Notify affected data subjects
                    </strong>{" "}
                    without undue delay when the breach is likely to result in a
                    high risk to their rights and freedoms.
                  </li>
                  <li>
                    Include in the notification: the nature of the breach,
                    categories and approximate volume of data affected, likely
                    consequences, and measures taken or proposed to address the
                    breach.
                  </li>
                  <li>
                    Maintain an internal breach response team with documented
                    and periodically reviewed procedures.
                  </li>
                  <li>
                    Conduct a post-incident review and implement necessary
                    corrective measures to prevent recurrence.
                  </li>
                </ul>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 9. International Data Transfers ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs
                ? "9. Transferencias Internacionales"
                : "9. International Data Transfers"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  De conformidad con los Arts.&nbsp;40 a 42 de la LOPDP, sus
                  datos personales pueden ser transferidos fuera del Ecuador en
                  el contexto del uso de infraestructura en la nube y APIs de
                  inteligencia artificial necesarias para la prestación de
                  nuestros servicios.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Proveedores específicos:
                  </strong>{" "}
                  alojamiento en la nube (AWS, Vercel), APIs de inteligencia
                  artificial (OpenAI, Anthropic).
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Salvaguardas contractuales:
                  </strong>{" "}
                  todas las transferencias se realizan bajo Cláusulas
                  Contractuales Tipo y Acuerdos de Procesamiento de Datos (DPA)
                  que garantizan un nivel de protección equivalente al
                  establecido por la legislación ecuatoriana.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Las transferencias se realizan únicamente a países que cuenten
                  con un nivel adecuado de protección o con las salvaguardas
                  apropiadas conforme a la LOPDP. No se realizan transferencias
                  a países con protección inadecuada sin normas corporativas
                  vinculantes o el consentimiento explícito del titular. El
                  titular podrá solicitar información sobre los destinos
                  específicos de las transferencias contactándonos a
                  hello@quip.ec.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  In accordance with Arts.&nbsp;40 through 42 of the LOPDP, your
                  personal data may be transferred outside of Ecuador in the
                  context of using cloud infrastructure and artificial
                  intelligence APIs necessary for the provision of our services.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Specific providers:
                  </strong>{" "}
                  cloud hosting (AWS, Vercel), AI APIs (OpenAI, Anthropic).
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Contractual safeguards:
                  </strong>{" "}
                  all transfers are carried out under Standard Contractual
                  Clauses and Data Processing Agreements (DPAs) that ensure a
                  level of protection equivalent to that established by
                  Ecuadorian law.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Transfers are made only to countries with an adequate level of
                  protection or with appropriate safeguards in accordance with
                  the LOPDP. No transfers are made to countries with inadequate
                  protection without binding corporate rules or the data
                  subject&apos;s explicit consent. You may request information
                  about specific transfer destinations by contacting us at
                  hello@quip.ec.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 10. AI-Specific Disclosures ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs
                ? "10. Divulgaciones sobre Inteligencia Artificial"
                : "10. AI-Specific Disclosures"}
            </h2>
            {isEs ? (
              <>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Transparencia:
                    </strong>{" "}
                    cuando usted interactúa con un sistema de inteligencia
                    artificial de Quip Make It Work, será informado de manera
                    clara y visible de que se trata de un sistema automatizado.
                  </li>
                  <li>
                    <strong className="text-text-primary">Finalidad:</strong>{" "}
                    utilizamos IA para chatbots, automatización de procesos,
                    análisis de datos y generación de contenido en el contexto
                    de nuestros servicios.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Datos de entrenamiento:
                    </strong>{" "}
                    los datos de nuestros clientes NUNCA se utilizan para
                    entrenar modelos de IA de terceros. Sus datos son
                    confidenciales y se emplean exclusivamente para la
                    prestación directa de los servicios contratados.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Minimización de datos:
                    </strong>{" "}
                    solo se envían a las APIs de IA los datos estrictamente
                    necesarios para cumplir con la solicitud específica.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Proveedores de APIs:
                    </strong>{" "}
                    los datos se procesan conforme a los Acuerdos de
                    Procesamiento de Datos (DPA) de cada proveedor y no son
                    retenidos más allá de la finalización de cada solicitud.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Decisiones automatizadas:
                    </strong>{" "}
                    no se toman decisiones basadas únicamente en tratamiento
                    automatizado que produzcan efectos jurídicos sin supervisión
                    humana.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Precisión de resultados de IA:
                    </strong>{" "}
                    los resultados generados por IA son de naturaleza
                    probabilística. No garantizamos la exactitud absoluta de
                    ningún resultado generado por sistemas de IA.
                  </li>
                  <li>
                    <strong className="text-text-primary">IA ética:</strong> nos
                    comprometemos con los principios de equidad, no
                    discriminación y transparencia en el uso de sistemas de IA.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Supervisión humana:
                    </strong>{" "}
                    todos los resultados críticos producidos por IA son
                    revisados por miembros de nuestro equipo humano antes de su
                    entrega o implementación.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Intervención humana:
                    </strong>{" "}
                    usted tiene derecho a solicitar la intervención humana en
                    cualquier decisión asistida por IA que le afecte.
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">Transparency:</strong>{" "}
                    when you interact with a Quip Make It Work artificial
                    intelligence system, you will be clearly and visibly
                    informed that it is an automated system.
                  </li>
                  <li>
                    <strong className="text-text-primary">Purpose:</strong> we
                    use AI for chatbots, process automation, data analysis, and
                    content generation within the context of our services.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Training data:
                    </strong>{" "}
                    client data is NEVER used to train third-party AI models.
                    Your data is confidential and used exclusively for the
                    direct provision of contracted services.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Data minimization:
                    </strong>{" "}
                    only the data strictly necessary to fulfill the specific
                    request is sent to AI APIs.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      API providers:
                    </strong>{" "}
                    data is processed in accordance with each provider&apos;s
                    Data Processing Agreements (DPAs) and is not retained beyond
                    request completion.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Automated decisions:
                    </strong>{" "}
                    no solely automated decisions with legal effects are made
                    without human oversight.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      AI output accuracy:
                    </strong>{" "}
                    AI-generated outputs are probabilistic in nature. We do not
                    guarantee the absolute accuracy of any output generated by
                    AI systems.
                  </li>
                  <li>
                    <strong className="text-text-primary">Ethical AI:</strong>{" "}
                    we are committed to the principles of fairness,
                    non-discrimination, and transparency in the use of AI
                    systems.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Human oversight:
                    </strong>{" "}
                    all critical AI-produced outputs are reviewed by human team
                    members before delivery or implementation.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Human intervention:
                    </strong>{" "}
                    you have the right to request human intervention in any
                    AI-assisted decision that affects you.
                  </li>
                </ul>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 11. Cookies & Tracking Technologies ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs
                ? "11. Cookies y Tecnologías de Rastreo"
                : "11. Cookies & Tracking Technologies"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Nuestro sitio web utiliza cookies y tecnologías similares.
                  Clasificamos las cookies de la siguiente manera:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Cookies esenciales:
                    </strong>{" "}
                    gestión de sesión, preferencia de idioma, tokens de
                    seguridad. Son estrictamente necesarias para el
                    funcionamiento del sitio y no requieren consentimiento.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Cookies de análisis:
                    </strong>{" "}
                    Google Analytics / Vercel Analytics. Permiten comprender
                    cómo los visitantes interactúan con nuestro sitio. Requieren
                    su consentimiento previo.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Cookies funcionales:
                    </strong>{" "}
                    preferencias de usuario, retención de datos de formularios.
                    Mejoran su experiencia de navegación.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Cookies publicitarias:
                    </strong>{" "}
                    NO utilizamos cookies de publicidad ni de marketing.
                  </li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Duración de las cookies:
                  </strong>{" "}
                  las cookies de sesión se eliminan al cerrar el navegador. Las
                  cookies persistentes tienen una duración máxima de doce (12)
                  meses.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Mecanismo de consentimiento:
                  </strong>{" "}
                  nuestro sitio dispone de un banner de cookies con control
                  granular que le permite aceptar o rechazar cada categoría de
                  cookies de manera individual.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Gestión de cookies:
                  </strong>{" "}
                  usted puede configurar su navegador para gestionar o eliminar
                  cookies en cualquier momento. Tenga en cuenta que la
                  desactivación de cookies esenciales puede afectar la
                  funcionalidad del sitio.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Tecnologías similares:
                  </strong>{" "}
                  utilizamos localStorage para almacenar preferencias del
                  usuario. No empleamos técnicas de fingerprinting del navegador
                  ni del dispositivo.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Our website uses cookies and similar technologies. We classify
                  cookies as follows:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">
                      Essential cookies:
                    </strong>{" "}
                    session management, language preference, security tokens.
                    Strictly necessary for website operation and do not require
                    consent.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Analytics cookies:
                    </strong>{" "}
                    Google Analytics / Vercel Analytics. Allow us to understand
                    how visitors interact with our site. Require your prior
                    consent.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Functional cookies:
                    </strong>{" "}
                    user preferences, form data retention. Enhance your browsing
                    experience.
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Advertising cookies:
                    </strong>{" "}
                    we do NOT use advertising or marketing cookies.
                  </li>
                </ul>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Cookie lifetimes:
                  </strong>{" "}
                  session cookies are deleted when you close your browser.
                  Persistent cookies have a maximum lifetime of twelve (12)
                  months.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Consent mechanism:
                  </strong>{" "}
                  our site provides a cookie banner with granular control,
                  allowing you to accept or reject each cookie category
                  individually.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Managing cookies:
                  </strong>{" "}
                  you may configure your browser to manage or delete cookies at
                  any time. Note that disabling essential cookies may affect
                  site functionality.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Similar technologies:
                  </strong>{" "}
                  we use localStorage for storing user preferences. We do not
                  employ browser or device fingerprinting techniques.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 12. Children's Data ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "12. Datos de Menores" : "12. Children\u0027s Data"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  De conformidad con el Art.&nbsp;25 de la LOPDP:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Nuestros servicios no están dirigidos a menores de quince
                    (15) años de edad.
                  </li>
                  <li>
                    No recopilamos deliberadamente datos personales de menores
                    de quince (15) años.
                  </li>
                  <li>
                    Si descubrimos que hemos recopilado datos de un menor de
                    quince (15) años sin el consentimiento requerido,
                    procederemos a eliminarlos de inmediato.
                  </li>
                  <li>
                    Para menores de entre quince (15) y dieciocho (18) años, se
                    requiere el consentimiento del padre, madre, tutor o
                    representante legal conforme a lo establecido en la LOPDP.
                  </li>
                  <li>
                    Si tiene conocimiento de que un menor nos ha proporcionado
                    datos personales, le rogamos que nos contacte de inmediato a
                    hello@quip.ec para que podamos tomar las medidas
                    necesarias.
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  In accordance with Art.&nbsp;25 of the LOPDP:
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    Our services are not directed at children under fifteen (15)
                    years of age.
                  </li>
                  <li>
                    We do not knowingly collect personal data from children
                    under fifteen (15) years of age.
                  </li>
                  <li>
                    If we discover that we have collected data from a child
                    under fifteen (15) without the required consent, we will
                    immediately proceed to delete it.
                  </li>
                  <li>
                    For minors between fifteen (15) and eighteen (18) years of
                    age, parental, guardian, or legal representative consent is
                    required as established in the LOPDP.
                  </li>
                  <li>
                    If you become aware that a minor has provided us with
                    personal data, please contact us immediately at
                    hello@quip.ec so we can take the necessary
                    measures.
                  </li>
                </ul>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 13. Complaints ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "13. Reclamaciones" : "13. Complaints"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Proceso interno de reclamaciones:
                  </strong>{" "}
                  puede presentar cualquier reclamación relacionada con el
                  tratamiento de sus datos personales enviando un correo
                  electrónico a hello@quip.ec. Responderemos a su
                  reclamación dentro de un plazo máximo de quince (15) días
                  hábiles.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Reclamación externa:
                  </strong>{" "}
                  si considera que el tratamiento de sus datos personales
                  infringe la LOPDP o cualquier otra normativa aplicable, tiene
                  derecho a presentar una reclamación ante la{" "}
                  <strong className="text-text-primary">
                    Superintendencia de Protección de Datos Personales del
                    Ecuador
                  </strong>
                  , con sede en Quito, Ecuador.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Ambos canales (interno y externo) están disponibles de manera
                  simultánea; no es necesario agotar la vía interna antes de
                  acudir a la autoridad de control.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Asimismo, de conformidad con el Art.&nbsp;56 de la LOPDP,
                  usted tiene derecho a ejercer la tutela judicial efectiva ante
                  los tribunales competentes del Ecuador.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Internal complaint process:
                  </strong>{" "}
                  you may submit any complaint related to the processing of your
                  personal data by sending an email to hello@quip.ec.
                  We will respond to your complaint within a maximum of fifteen
                  (15) business days.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    External complaint:
                  </strong>{" "}
                  if you believe that the processing of your personal data
                  infringes the LOPDP or any other applicable regulation, you
                  have the right to file a complaint with the{" "}
                  <strong className="text-text-primary">
                    Superintendencia de Protección de Datos Personales del
                    Ecuador
                  </strong>
                  , headquartered in Quito, Ecuador.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Both channels (internal and external) are available
                  simultaneously; it is not necessary to exhaust the internal
                  channel before approaching the supervisory authority.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Additionally, in accordance with Art.&nbsp;56 of the LOPDP,
                  you have the right to an effective judicial remedy before the
                  competent courts of Ecuador.
                </p>
              </>
            )}

            <hr className="border-border my-12 max-w-3xl" />

            {/* ─── 14. Changes & Contact ─── */}
            <h2 className="font-[var(--font-sora)] font-semibold text-xl tracking-[-0.5px] text-text-primary mb-4 mt-10">
              {isEs ? "14. Modificaciones y Contacto" : "14. Changes & Contact"}
            </h2>
            {isEs ? (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  Nos reservamos el derecho de actualizar esta Política de
                  Privacidad en cualquier momento. Los cambios materiales serán
                  notificados mediante correo electrónico o un banner visible en
                  nuestro sitio web. Para cambios significativos, se
                  proporcionará un aviso con al menos treinta (30) días de
                  antelación. El uso continuado de nuestros servicios después
                  del período de notificación constituye su aceptación de los
                  cambios.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">
                    Contacto completo:
                  </strong>
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">Empresa:</strong> Quip
                    Make It Work
                  </li>
                  <li>
                    <strong className="text-text-primary">Ubicación:</strong>{" "}
                    Quito, Ecuador
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Correo electrónico:
                    </strong>{" "}
                    hello@quip.ec
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Delegado de Protección de Datos:
                    </strong>{" "}
                    hello@quip.ec (asunto: &quot;PROTECCIÓN DE
                    DATOS&quot;)
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  We reserve the right to update this Privacy Policy at any
                  time. Material changes will be notified via email or a visible
                  banner on our website. For significant changes, at least
                  thirty (30) days&apos; notice will be provided. Continued use
                  of our services after the notice period constitutes acceptance
                  of the changes.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                  <strong className="text-text-primary">Full contact:</strong>
                </p>
                <ul className="list-disc list-inside text-text-secondary text-sm leading-relaxed mb-4 max-w-3xl space-y-2">
                  <li>
                    <strong className="text-text-primary">Company:</strong> Quip
                    Make It Work
                  </li>
                  <li>
                    <strong className="text-text-primary">Location:</strong>{" "}
                    Quito, Ecuador
                  </li>
                  <li>
                    <strong className="text-text-primary">Email:</strong>{" "}
                    hello@quip.ec
                  </li>
                  <li>
                    <strong className="text-text-primary">
                      Data Protection Officer:
                    </strong>{" "}
                    hello@quip.ec (subject: &quot;DATA
                    PROTECTION&quot;)
                  </li>
                </ul>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import terms from "../media/listcheck.svg";
import pattern_blue from "../media/lineas.png";

function Testimonials() {
  return (
    <div
      className="bg-blue-800"
      style={{ backgroundImage: `url(${pattern_blue})` }}
      id="terms"
    >
      <div className="items-center pb-8 md:ml-8">
        <div className=" text-center pt-10">
          <h1 className="text-center font-light text-2xl md:text-3xl  text-white">
            Términos y condiciones
          </h1>
          <ul className="list-disc list-inside md:text-xl font-light text-white md:px-6 px-2 text-justify pt-2">
            <li className="m-2">
              Nuestros servicios se agendan con 24 horas de anticipacion para
              garantizar la puntualidad a la entrega de los servicios de
              alquiler.
            </li>
            <li className="m-2">
              MUY IMPORTANTE que al momento del operador hacer entrega,
              instalación y prueba de la lavadora SE DEBE PAGAR EL SERVICIO 👈🏼
              Importante tener el pago A LA MANO para cancelar sino se retira la
              lavadora.
            </li>
            <li className="m-2">
              Si va pagar por transferecia o consignación bancaria se debe hacer
              con anticipación de la entrega de la lavadora e informar que lo va
              hacer por ese medio de pago ,posteriormente se debe enviar copia
              del recibo que diga 'Existoso o Aprobado ",esto es para validar el
              pago del servicio .
            </li>
            <li className="m-2">NO FIAMOS EL SERVICIO </li>
            <li className="m-2">
              En caso de incurrir en retraso de pago del servicio deberá pagar
              3000 de mora adicional por día .
            </li>
            <li className="m-2">
              El servicio no se paga después de usted haber utilizado la
              lavadora sino al momento que se entregue lavadora .Existe personas
              irresponsable que posteriormente no pagan .{" "}
            </li>
            <li className="m-2">
              Por políticas de seguridad no debemos exponer a nuestro operador a
              subir y bajar lavadoras después de un primer piso ,o cargar a
              cierta distancia , en caso de ser así se le recargara 3000 pesos
              adicional hasta un tercer piso y 5000 hasta un quinto piso , tenga
              en cuenta que es un servicio adicional.
            </li>
            <li className="m-2">
              Nosotros como empresa nos vemos en la obligación de prestar
              servicio de calidad y que satisfagan la necesidad de nuestro
              cliente ,es por eso que debemos resguardar integridad física del
              operador y del equipo .
            </li>
            <li className="m-2">
              {" "}
              Se debe tener las tomas de agua en buen estado, canilla y llave
              con rosca, en caso de lavadora automáticas. Tenga en cuenta que si
              está dañada no es responsabilidad de nosotros el que no pueda
              lavar ya que si hay falla esto puede imposibilitar el buen
              desempeño de.la lavadora{" "}
            </li>
            <li className="m-2">
              El área o espacio donde se va instalar la lavadora debe ser
              techado,estable el piso y muy limpio si la lavadora queda a la
              intemperie puede correr el riesgo de dañarse por el sol o la
              lluvia.
            </li>
            <li className="m-2">
              No debe quitar el aterramiento del cable de la lavadora ,si lo
              hace va tener que pagar el daño. Este pin de aterramiento protege
              al usuario en caso de descarga o corto eléctrico .
            </li>
            <li className="m-2">
              El responsable del servicio velara que otro no use la lavadora .
            </li>
            <li className="m-2">
              Por favor no sobrecargue la capacidad de la lavadora.Esto ocurre
              por pretender lavar gran cantidad de ropa en tiempo corto. Correra
              el riego que se dañe y deberá pagar los daños ocasionados{" "}
            </li>
            <li className="m-2">
              Debes tomar en cuenta la cantidad de ropa a lavar para que de
              acuerdo al plan de servicio puedas lavar toda la cantidad de ropa
              ,si vas a solicitar plan corto y tienes mucha cantidad de ropa, lo
              más seguro es que tengas solicitar más horas adicional y/o
              sobrecargara la capacidad de la lavadora .
            </li>
            <li className="m-2">
              No se debe permitir que niños o niñas opere la lavadora .
            </li>
            <li className="m-2">
              Si tiene mascota como gatos, perros, conejos, entre otros, debe
              tener cuidado de que no muerda la manguera o cable ,ni se monte
              arriba de la lavadora .
            </li>
            <li className="m-2">
              No debe montar ningún objeto arriba de la tapa de la lavadora .
            </li>
            <li className="m-2">
              Si la cantidad de ropa es bastante recomendamos agendar planes de
              servicios. Mixto y 24 horas.
            </li>
            <li className="m-2">
              Tenga en cuenta que después de agendar un plan no está permitido
              cambiar a otro plan al menos que haya expirado las horas.
            </li>
            <li className="m-2">
              Aplica horas adicionales con previa anticipación .Está tiene un
              costo de 3000 pesos.
            </li>
            <li className="m-2">
              No se debe lavar zapatos u otros objetos que pueda ocasionar daño
              a la tina. Esto crea desbalance en la tina ocasionando golpes y
              fricción en la parte superior de la tina. Si esto ocurre ocasiona
              daños y deberá pagar los daños.
            </li>
            <li className="m-2">
              Los planes de servicios de alquiler varía de precios de acuerdo a
              la distancia y condiciones donde se encuentra ubicada la propiedad
              veredas ,calles,lomas inclinadas , edificios sin ascensor ,casa
              que tengan más de un piso.
            </li>
            <li className="m-2">
              {" "}
              Se debe constar que la lavadora se está recibiendo en perfectas
              condiciones para que al momento de la entrega entregar en las
              mismas condiciones. Muy importante comprobar que la lavadora este
              en perfectas condiciones, de igual al momento de entregar debe
              exigir que la prueben para entregar conforme.
            </li>
            <li className="m-2">
              El cliente no está autorizado para manipular parte eléctricas ni
              partes mecánicas de la lavadora.
            </li>
            <li className="m-2">
              No deberá desintalar la lavadora y /o moverla a otro sitio .Se
              corre el riesgo que se golpee o se raye.
            </li>
            <li className="m-2">
              Después que se haga entrega de la lavadora ,en caso de irse la luz
              y el agua ,no nos hacemos responsable en exonerar el servicio .Son
              situación que se escapa de las manos y el servicio ya fue prestado
              en logística , trasporte y empleado. Para esto debe estar seguro
              que el servicio del agua y corriente eléctrica este funcionando
              sin riesgo a corte o suspensión{" "}
            </li>
            <li className="m-2">
              Las horas de servicio acordada de acuerdo el plan se debe respetar
              en caso que el cliente por ordene retirar el servicio antes.
            </li>
            <li className="m-2">
              En caso de exceder las horas acordadas debe cancelar 4000 pesos
              adicionales por cada horas .
            </li>
            <li className="m-2">
              No utilizar la lavadora despues de expirar el servicio. En caso de
              expirar el plan acordado y el cliente continua usando la lavadora
              sin autorización o notificación,se le cobrara el tiempo excedente
              por horas. Esto suele suceder cuando el operador se de cuenta que
              todavía están usando la lavadora al momento de retirar el servicio
              y haya terminado el plan de servicio.
            </li>
            <li className="m-2">
              Evite utilizar la lavadora después que expire el plan, aún así si
              el operador no ha llegado a retirar la lavadora .Corre el riesgo
              de quedarse la ropa si terminar los ciclos y de cobrara por hora
              adicional .
            </li>
            <li className="m-2">
              El cliente debe informar con anticipación que necesita salir en el
              tiempo posterior al plan de servicio agendado .En caso de no
              informar a la empresa de servicio de alquiler ,las horas excedente
              van hacer debitada al cliente.
            </li>
            <li className="m-2">
              Esto es en caso de que expiró el plan de servicio y el operador no
              ha llegado ,usted deberá llamar o informar que necesita salir.
            </li>
            <li className="m-2">
              El operador es el único que debe instalar y desinstalar la
              lavadora .No está autorizado de desintalar la lavadora o instalar.
            </li>
          </ul>
        </div>

        <img
          className="mt-4 ml-10 md:ml-[30%] md:w-[500px] w-3/4"
          src={terms}
          alt=""
        />
      </div>
    </div>
  );
}

export default Testimonials;

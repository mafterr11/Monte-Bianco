import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Termeni și Condiții - Monte Bianco",
  description:
    "Citiți cu atenție Termenii și Condițiile noastre pentru utilizarea site-ului Monte Bianco. Acestea includ informații despre confidențialitate, drepturi de proprietate intelectuală, responsabilități legale și multe altele.",
  keywords:
    "Monte Bianco termeni și condiții, politica confidențialitate, drepturi proprietate intelectuală, responsabilități legale",
});

const TermeniSiConditii = () => {
  return (
    <div className="mx-40 py-40">
      <h2 className="text-shadow mb-32 text-center">TERMENI ȘI CONDIȚII</h2>
      <div className="mb-8 flex flex-col items-start justify-center gap-y-4">
        <h5 className=" text-[20px]">
          <span className="text-accent">&#9679;</span> Va multumim pentru
          vizitarea acestui website. Va rugam sa cititi cu atentie Termenii si
          Conditiile din acest document, deoarece orice folosire a acestui
          website necesita acceptarea de catre dumneavoastra a Termenilor si
          Conditiilor prezentate aici.
        </h5>
        <h5 className="text-[20px]">
          <span className="text-accent">&#9679;</span> Termenii „noi”,
          „a/al/ai/ale noastra/nostru/nostri/noastre”, si „Monte Bianco ” ce
          apar pe parcusul acestui site se refera la Monte Bianco S.A. si la
          oricare dintre companiile afiliate acesteia, dupa cum o cere
          contextual, ori la Monte Bianco Romania. „Voi/ Dumneavoastra” se
          refera la orice persoana care acceseaza si/sau foloseste acest
          website.
        </h5>
      </div>
      {/* Container */}
      <div className="mb-32 flex flex-col items-start gap-y-12">
        {/* 1 */}
        <div className="flex flex-col items-start gap-y-4">
          <h5 className="text-accent">
            Politica de confidentialitate a website-ului
          </h5>
          <p>
            Orice informatie cu caracter personal sau materiale transmise catre
            acest website se supun prevederilor politicii de confidentialitate
            si protectie a datelor cu caracter personal de pe acest website.
          </p>
        </div>
        {/* 2 */}
        <div className="flex flex-col items-start gap-y-4">
          <h5 className="text-accent">
            Acuratetea, integralitatea si actualitatea informatiei
          </h5>
          <p>
            Cu toate ca depunem toate eforturile necesare pentru a asigura
            acuratetea si integralitatea informatiei de pe acest website, nu ne
            asumam responsabilitatea daca informatiile disponibile pe acest
            website nu sunt exacte sau complete. Orice raportare la materialul
            de pe acest website se va face pe propriul dumneavoastra risc.
            Sunteti de acord ca este responsabilitatea dumneavoastra de a
            monitoriza orice modificari ale materialului si informatiilor de pe
            acest website.
          </p>
        </div>
        {/* 3 */}
        <div className="flex flex-col items-start gap-y-4">
          <h5 className="text-accent">Transmitere</h5>
          <p>
            Orice comunicare sau material fara caracter personal transmise
            acestui website prin posta electronica sau in alt mod, incluzand
            aici orice informatii, intrebari, comentarii, sugestii sau alte
            informatii similare vor fi tratate ca informatii neconfidentiale si
            nebrevetate. Tot ceea ce transmiteti sau expediati devine
            proprietatea Monte Bianco S.A. si poate fi folosit in orice scop,
            incluzand dar fara a se limita la reproducere, dezvaluire,
            transmitere, publicare, difuzare sau expediere prin posta. In plus,
            Monte Bianco S.A. este liber sa utilizeze in orice scop (incluzand
            dar fara a se limita la dezvoltarea, fabricarea, publicitatea si
            marketingul produselor) orice idee, lucrare de arta, inventie,
            proiect de dezvoltare, sugestie sau concept continute in orice
            comunicare transmisa prin intermediul acestui website. Nici o astfel
            de utilizare nu implica vreo compensatie pentru tertii care au
            transmis informatia. Prin transmiterea acestor informatii, garantati
            totodata ca sunteti proprietarul materialului/continutului transmis,
            ca acest material/continut nu este calomnios si ca folosirea sa de
            catre Monte Bianco S.A.nu incalca drepturile nici unei terte parti
            si nici o alta lege in vigoare. Monte Bianco S.A. nu are nici o
            obligatie de a folosi informatia primita.
          </p>
        </div>
        {/* 4 */}
        <div className="flex flex-col items-start gap-y-4">
          <h5 className="text-accent">Drepturi de proprietate intelectuala</h5>
          {/* Multiple */}
          <div className="flex flex-col items-start gap-y-6">
            <p>
              Toate drepturile de autor, marcile si orice alte drepturi de
              proprietate intelectuala din toate textele, imaginile sau alte
              materiale de pe acest website sunt proprietatea Monte Bianco S.A.
              sau sunt incluse cu permisiunea proprietarului de drept.
            </p>
            <p>
              Aveti dreptul sa parcurgeti acest website, sa reproduceti portiuni
              prin imprimare, descarcare pe un hard disk sau sa le distribuiti
              altor indivizi. Acestea se pot face doar cu conditia sa pastrati
              intacte toate drepturile de autor si alte insemne de proprietate
              si cu conditia ca pe aceste reproduceri sa apara insemnul de marca
              inregistrata mentionat mai jos. Nu este permisa reproducerea
              niciunei parti a acestui website pentru a fi vanduta sau
              distribuita in schimbul unui castig comercial si nici nu se
              permite modificarea sau incorporarea sa in orice alte lucrari,
              publicatii sau website-uri.
            </p>
          </div>
        </div>
        {/* 5 */}
        <div className="flex flex-col items-start gap-y-4">
          <h5 className="text-accent">
            ® Marca inregistrata a Monte Bianco S.A.. Toate drepturile
            rezervate.
          </h5>
          <p>
            Marcile, logo-urile, caracterele si alte marci de serviciu (denumite
            in mod colectiv „Marci”) ce apar pe acest website apartin Monte
            Bianco S.A. Nimic din ceea ce contine acest website nu va fi
            considerat ca oferind vreo licenta sau drept de folosire a vreunei
            Marci ce apare pe acest website. Este strict interzisa
            folosirea/folosirea defectuoasa a Marcilor ce apar pe acest website,
            sau in orice alt context pe acest website, cu exceptia celor
            prevazute in acest document. De asemenea, va aducem la cunostinta ca
            Monte Bianco isi va exercita in mod activ drepturile de proprietate
            intelectuala in toate aspectele protejate de lege.
          </p>
        </div>
        {/* 6 */}
        <div className="flex flex-col items-start gap-y-4">
          <h5 className="text-accent">Link-uri catre alte website-uri</h5>
          <p>
            Link-urile de pe website-ul Monte Bianco S.A. va pot trimite in
            afara retelei si sistemelor Monte Bianco S.A., iar Monte Bianco
            S.A.nu isi asuma nici o responsabilitate pentru continutul,
            acuratetea sau functionarea acestor terte website-uri. Link-urile
            sunt oferite cu buna credinta si Monte Bianco S.A. nu poate fi
            considerat responsabila pentru nici o schimbare ulterioara in alte
            website-uri ale caror link-uri sunt oferite de noi. Includerea
            oricarei trimiteri catre alte website-uri nu implica sustinerea
            acestora de catre Monte Biano S.A. Va recomandam sa cititi cu
            atentie notele legale si de confidentialitate ale tuturor celorlalte
            website-uri pe care le vizitati.
          </p>
        </div>
        {/* 7  */}
        <div className="flex flex-col items-start gap-y-4">
          <h5 className="text-accent">Garantii si avertizari</h5>
          <p>
            Folosirea acestui website se va face pe riscul dumneavoastra
            personal si exclusiv.
          </p>
        </div>
        {/* 8 */}
        <div className="flex flex-col items-start gap-y-4">
          <h5 className="text-accent">Garantii</h5>
          {/* Multiple */}
          <div className="flex flex-col items-start gap-y-6">
            <p>
              {" "}
              Acest website va este oferit „asa cum este” si „asa cum este pus
              la dispozitie” si, ca urmare, Monte Bianco S.A. nu ofera nici un
              fel de garantie, nici explicita, nici implicita, statutorie sau de
              alt fel (inclusiv garantii implicite de mercantibilitate sau
              calitate satisfacatoare si potrivire pentru un anumit scop)
              inclusiv garantii sau orice afirmatii cu privire la faptul ca
              materialele prezentate pe acest website vor fi complete, corecte,
              de incredere, actuale, fara a afecta terte parti, precum si ca
              accesul la acest website va fi neintrerupt sau fara erori sau fara
              virusi, nici cu privire la faptul ca accesul la acest website va
              fi securizat, si ca orice sfat sau opinie obtinuta de la Monte
              Bianco S.A. prin intermediul acestui website vor fi corecte, de
              incredere. In consecinta, Monte Bianco S.A., nu face nici un fel
              de declaratii si nu isi asuma nici un fel de garantii cu privire
              la cele de mai sus.
            </p>
            <p>
              Va rugam sa tineti cont de faptul ca unele jurisdictii nu permit
              excluderea garantiilor implicite, astfel incat unele din aceste
              excluderi nu va sunt aplicabile. Va rugam sa verificati legislatia
              din tara dumneavoastra.
            </p>
            <p>
              Ne rezervam dreptul de a restrictiona, suspenda sau inceta, fara
              notificareprealabila, in orice moment, accesul dumneavoastra la
              acest website sau la orice sectiune sau parte a acestuia.
            </p>
          </div>
        </div>
        {/* 9 */}
        <div className="flex flex-col items-start gap-y-4">
          <h5 className="text-accent">Responsabilitate legala</h5>
          {/* Multiple */}
          <div className="flex flex-col items-start gap-y-6">
            <p>
              Monte Bianco S.A. si /sau orice alte parti implicate in crearea,
              executia sau prezentarea acestui website in numele nostru nu vor
              avea nici o responsabilitate legala sau de alt tip pentru nici un
              fel de daune, costuri, pierderi sau responsabilitati directe,
              incidentale, indirecte, speciale sau punitive ce pot rezulta ca
              urmare a accesarii, utilizarii, incapacitatii de utilizare, a
              schimbarii continutului acestui website, sau ca urmare a accesarii
              de catre dumneavoastra a unui alt website printr-un link de pe
              acest website sau, in masura permisa de legislatia aplicabila, ca
              urmare a actiunilor pe care le intreprindem sau nu in urma
              oricarui mesaj de posta electronica trimis de dumneavoastra.
            </p>
            <p>
              Monte Bianco S.A. si/sau orice alte parti implicate in crearea,
              executia sau prezentarea acestui website nu vor avea nici o
              responsabilitate de mentinere a materialelor si serviciilor
              disponibile prin intermediul acestui website sau de transmitere a
              unor modificari, actualizari sau a altor comunicate in legatura cu
              acestea. Orice material de pe acest website este supus
              modificarilor, fara aviz prealabil.
            </p>
            <p>
              Mai mult, Monte Bianco S.A. nu va avea nici o responsabilitate
              legala sau de alta natura pentru nici o pierdere suferita din
              cauza virusurilor ce va pot afecta computerul sau orice alta
              proprietate pentru ca ati folosit, accesat sau descarcat vreun
              material de pe acest website. Daca decideti sa descarcati vreun
              material de pe acest website, o faceti pe propriul dumneavoastra
              risc.
            </p>
            <p>
              In limita maxima prevazuta de legislatia aplicabila, renuntati in
              mod expres la orice pretentie fata de Monte Bianco S.A.sau fata de
              reprezentantii sai, directorii, angajatii, furnizorii sau
              programatorii sai, pretentii ce ar putea rezulta in urma folosirii
              sau accesarii de catre dumneavoastra a acestui website.
            </p>
          </div>
        </div>
        {/* 10 */}
        <div className="flex flex-col items-start gap-y-4">
          <h5 className="text-accent">Jurisdictie si lege aplicabila</h5>
          {/* Multiple */}
          <div className="flex flex-col items-start gap-y-6">
            <p>
              Produsele Monte Bianco S.A., materialele, ofertele și informațiile
              care apar pe acest site sunt destinate pentru clientii si
              utilizatorii din Romania. Monte Bianco S.A. nu garanteaza că
              produsele și conținutul acestui website sunt compatibile cu sau
              disponibile in alte locatii decat Romania. Vă rugăm să contactați
              distribuitorul nostru local pentru a obține mai multe informații
              despre disponibilitatea produselor în țara dumneavoastră.
              Produsele care apar pe acest site sunt doar reprezentări vizuale
              și, ca atare, acestea nu constituie adevărata lor dimensiune,
              ambalaj, culoare etc.
            </p>
            <p>
              Dumneavoastra si Monte Bianco S.A.sunteti de acord ca orice
              controverse sau pretentii provenind din sau in legatura cu
              folosirea acestui website vor fi guvernate de catre legea romana
              si vor fi inaintate exclusiv instantelor din Bucuresti, Romania.
            </p>
            <p>
              Monte Bianco S.A. nu garanteaza faptul că materialele și
              informatiile din acest website sunt disponibile sau potrivite in
              toate tarile sau limbile.
            </p>
          </div>
        </div>
        {/* 11 */}
        <div className="flex flex-col items-start gap-y-4">
          <h5 className="text-accent">Actualizarea avizului legal</h5>
          <p>
            Ne rezervam dreptul de a face orice completari sau modificari la
            aceasta notificare legala. Va rugam sa vizitati aceasta pagina din
            cand in cand pentru a va informa asupra acestora si a noilor
            informatii.
          </p>
        </div>
        {/* 12 */}
        <div className="flex flex-col items-start gap-y-4">
          <h5 className="text-accent">Activitati interzise</h5>
          {/* Multiple */}
          <div className="flex flex-col items-start gap-y-6">
            <p>
              Este interzisa intreprinderea oricarui act pe care Monte Bianco
              S.A. la libera sa alegere, il poate considera inadecvat si/sau ar
              putea fi considerat ca un act ilicit sau este interzis de catre
              orice lege aplicabila acestui website, incluzand dar fara a se
              limita la:
            </p>
            <p>
              - Orice act ce ar constitui o incalcare atat a confidentialitatii
              (incluzand incarcarea de informatii private fara a avea acordul
              persoanei in cauza) cat si a oricarui alt drept legal al
              persoanei;
            </p>
            <p>
              - Folosirea acestui website pentru a defaima sau calomnia Monte
              Bianco S.A, angajatii sai sau alti indivizi, sau comportarea
              intr-un fel care ar putea afecta buna reputatie a Monte Bianco
              S.A.;
            </p>
            <p>
              - Incarcarea de fisiere ce contin virusuri care ar putea crea
              daune proprietatilor Monte Bianco S.A. sau proprietatilor altor
              persoane;
            </p>
            <p>
              - Afisarea pe sau transmiterea catre acest website a oricarui
              material neautorizat incluzand, dar fara a se limita la, materiale
              care in opinia noastra ar putea cauza neplaceri sau ar putea fi
              defaimatoare, rasiste, obscene, amenintatoare, pornografice sau
              ilicite, fiind in detrimentul sau incalcand sistemele sau retelele
              de securitate ale Monte Bianco S.A. sau ale tertilor.
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-center">Copyright © 2024 S.C. Monte Bianco S.A.</h3>
    </div>
  );
};

export default TermeniSiConditii;

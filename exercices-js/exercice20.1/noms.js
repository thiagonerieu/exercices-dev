function ajouterTexte(pseudo, duTexte) {

    const p = document.createElement('p');

    const strong = document.createElement('strong');
    strong.textContent = pseudo;

    const texto = document.createTextNode(` - ${duTexte}`);

    p.append(strong, texto);
    document.body.append(p);
}

ajouterTexte('Daniel', 'Gracia');
ajouterTexte('Jarry', 'Borne');
ajouterTexte('JCVD', 'OK');
ajouterTexte('Dongue', 'Rodrigue');




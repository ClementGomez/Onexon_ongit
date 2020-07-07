export default class Element {
    constructor(index,Q, A, idA, priceA, B, idB, priceB, C, idC, priceC, D, idD, priceD, E, idE, priceE) {
        this.index = index;
        this.Q = Q;
        this.A = A;
        this.idA = idA;
        this.priceA = priceA;
        this.B = B;
        this.idB = idB;
        this.priceB = priceB;
        this.C = C;
        this.idC = idC;
        this.priceC = priceC;
        this.D = D;
        this.idD = idD;
        this.priceD = priceD;
        this.E = E;
        this.idE = idE;
        this.priceE = priceE;
    }
}
export const obj1 = [
    new Element(0),

    new Element( 1,
        `Votre projet est un(e):`,
        `film d'entreprise`, 2, 0,
        `captation d'événement`, 3, 0,
        `court/moyen métrage</br>ou clip musique`, 4, 0),
            
    // Arbre branche 1
            
    new Element( 2,
        `Votre film d'entreprise est un(e):`,
        `film promo`, 5, 450,
        `interview`, 6, 450,
        `captation</br>séminaire/évenement`, 7, 450),
    new Element( 3,
        `Votre captation d'événement est un(e):`,
        `pièce de théatre,</br>concert ou</br>spectacle`, 8, 450,
        `promotion de votre événement`, 9, 450,
        `captation de</br>votre event sportif`, 10, 450),
    new Element( 4,
        `Votre projet est un(e):`,
        `court/moyen</br>métrage`, 11, 450,
        `clip musical`, 12, 450),
    
    // Arbre branche  A1
    
    new Element( 5,
        `Votre film promo a-t'il un scénario ?`,
        `oui`, 13, 0,
        `non`, 13, 150),
    new Element( 6,
        `Avez-vous des questions préparées pour votre interview ?`,
        `oui`, 14, 0,
        `non`, 14, 100),
    new Element( 7,
        `combien de temps dure votre événement ?`,
        `Jour(s)`, 15, //calcPriceDayNbrSeminaire(dayNbrSeminaire)
        ),
    
    // Arbre branche B1
    
    new Element( 8,
        `Vous souhaitez une captation :`,
        `simple`, 17, 0,
        `avancée`, 17, 250,
        `complète`, 17, 550),
    new Element( 9,
        `Quelle est la durée de votre événement ?`,
        `Jour(s)`, 18, //calcPriceDayNbrPromo(dayNbrPromo)
        ),
    new Element( 10,
        `Quelle est la durée de votre événement ?`,
        `Jour(s)`, 19, //calcPriceDayNbrSport(dayNbrSport)
        ),
        
    // Arbre branche C1
    
    new Element( 11,
        `Vous voulez :`,
        `tournage image`, 20, 0,
        `tournage</br>image & son`, 20, 400,
        `tournage</br>image & son</br>+ montage`, 20, 650),
    new Element( 12,
        `Avez-vous un scenario pour votre clip ?`,
        `oui`, 21, 0,
        `non`, 21, 300),
        
    // Arbre branche A2
    
    new Element( 13,
        `Combien de temp dure votre film ?`,
        `Minute(s)`, 22, //calcPriceFilmLenghtProm(filmLenghtPromo)
        ),
    new Element( 14,
        `Combien de personnes sont interviewées ?`,
        `Personne(s)`, 16, //calcPriceInterviewPersNb(interviewPersNbr)
        ),
    new Element( 15,
        `Vous voulez :`,
        `vidéo courte</br>aftermovie`, 22, 0,
        `vidéo d'un instant</br>de votre événement`, 22, 250,
        `une captation complète<br>de votre événement`, 22, 550),
    new Element( 16,
        `Combien de temp dure votre interview ?`,
        `Minute(s)`, 22, //calcPriceFilmLenghtInterview (filmLenghtInterview)
        ),
    
    // Arbre branche B2
    
    new Element( 17,
        `Vous voulez :`,
        `résumé ou</br>aftermovie`, 22, 0,
        `film complet`, 22, 250),
    new Element( 18,
        `combien de temps dure votre vidéo ?`,
        `Minute(s)`, 22, //calcPriceDayNbrTheatre(dayNbrTheatre)
        ),
    new Element( 19,
        `Vous voulez :`,
        `vidéo publicitaire</br>courte`, 22, 0,
        `Best of`, 22, 150,
        `événement Complet`, 22, 400),
    
    // Arbre branche C2
    
    new Element( 20,
        `combien de temps dure votre événement ?`,
        `Jour(s)`, 22, //calcPriceDayNbrMetrage(dayNbrMetrage)
        ),
    
    new Element( 21,
        `Vous voulez :`,
        `tournage image`, 22, 0,
        `tournage</br>image & son`, 22, 300,
        `tournage</br>image & son</br>+ montage`, 22, 450),
    
    new Element( 22,
        `On estime votre projet à :`,
        )
];

import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class ScoreEmoji extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }





    calcul_energie = (enrgy, mode) => {
        var energie = enrgy;
        var pts = 0;


        if (mode == "boissons") {
            if (energie <= 0) { pts = 0 }
            else if (energie <= 30) { pts = 1 }
            else if (energie <= 60) { pts = 2 }
            else if (energie <= 90) { pts = 3 }
            else if (energie <= 120) { pts = 4 }
            else if (energie <= 150) { pts = 5 }
            else if (energie <= 180) { pts = 6 }
            else if (energie <= 210) { pts = 7 }
            else if (energie <= 240) { pts = 8 }
            else if (energie <= 270) { pts = 9 }
            else if (energie > 270) { pts = 10 }
        }
        else {
            if (energie <= 335) { pts = 0 }
            else if (energie <= 670) { pts = 1 }
            else if (energie <= 1005) { pts = 2 }
            else if (energie <= 1340) { pts = 3 }
            else if (energie <= 1675) { pts = 4 }
            else if (energie <= 2010) { pts = 5 }
            else if (energie <= 2345) { pts = 6 }
            else if (energie <= 2680) { pts = 7 }
            else if (energie <= 3015) { pts = 8 }
            else if (energie <= 3350) { pts = 9 }
            else if (energie > 3350) { pts = 10 }
        }

        return pts;
    }




    /* Calcul des points négatifs liés à la quantité d'acides gras saturés */
    calcul_acides_gras_satures = (acides_gras_satures, matieres_grasses, mode) => {
        var matieres_grasses = matieres_grasses;
        var acides_gras_satures = acides_gras_satures;

        var pts = 0;


        if (mode == "matieres_grasses") {
            // Pour les matières grasses, c'est le ratio acides gras saturés / mat grasses qui compte
            var ratio = 0;
            if (parseInt(matieres_grasses) != 0 && matieres_grasses != "") {
                ratio = Math.round(acides_gras_satures / matieres_grasses * 10000) / 100; // arrondi à 2 décimales
            }

            if (ratio < 10) { pts = 0; }
            else if (ratio < 16) { pts = 1; }
            else if (ratio < 22) { pts = 2; }
            else if (ratio < 28) { pts = 3; }
            else if (ratio < 34) { pts = 4; }
            else if (ratio < 40) { pts = 5; }
            else if (ratio < 46) { pts = 6; }
            else if (ratio < 52) { pts = 7; }
            else if (ratio < 58) { pts = 8; }
            else if (ratio < 64) { pts = 9; }
            else if (ratio >= 64) { pts = 10; }

        }
        else { // tous les autres cas
            if (acides_gras_satures <= 1) { pts = 0 }
            else if (acides_gras_satures <= 2) { pts = 1 }
            else if (acides_gras_satures <= 3) { pts = 2 }
            else if (acides_gras_satures <= 4) { pts = 3 }
            else if (acides_gras_satures <= 5) { pts = 4 }
            else if (acides_gras_satures <= 6) { pts = 5 }
            else if (acides_gras_satures <= 7) { pts = 6 }
            else if (acides_gras_satures <= 8) { pts = 7 }
            else if (acides_gras_satures <= 9) { pts = 8 }
            else if (acides_gras_satures <= 10) { pts = 9 }
            else if (acides_gras_satures > 10) { pts = 10 }

        }


        return pts;
    }



    /* Calcul des points négatifs liés à la quantité de sucres */
    calcul_sucres = (sucres, mode) => {
        var sucres = sucres;
        var pts = 0;



        if (mode == "boissons") {
            if (sucres <= 0) { pts = 0 }
            else if (sucres <= 1.5) { pts = 1 }
            else if (sucres <= 3) { pts = 2 }
            else if (sucres <= 4.5) { pts = 3 }
            else if (sucres <= 6) { pts = 4 }
            else if (sucres <= 7.5) { pts = 5 }
            else if (sucres <= 9) { pts = 6 }
            else if (sucres <= 10.5) { pts = 7 }
            else if (sucres <= 12) { pts = 8 }
            else if (sucres <= 13.5) { pts = 9 }
            else if (sucres > 13.5) { pts = 10 }

        }
        else {
            if (sucres <= 4.5) { pts = 0 }
            else if (sucres <= 9) { pts = 1 }
            else if (sucres <= 13.5) { pts = 2 }
            else if (sucres <= 18) { pts = 3 }
            else if (sucres <= 22.5) { pts = 4 }
            else if (sucres <= 27) { pts = 5 }
            else if (sucres <= 31) { pts = 6 }
            else if (sucres <= 36) { pts = 7 }
            else if (sucres <= 40) { pts = 8 }
            else if (sucres <= 45) { pts = 9 }
            else if (sucres > 45) { pts = 10 }
        }

        return pts;
    }


    /* Calcul des points positifs liés à la quantité de fibres */
    calcul_fibres = (fibres) => {
        var fibres = fibres;
        var pts = 0;


        if (fibres <= 0.9) { pts = 0; }
        else if (fibres <= 1.9) { pts = 1; }
        else if (fibres <= 2.8) { pts = 2; }
        else if (fibres <= 3.7) { pts = 3; }
        else if (fibres <= 4.7) { pts = 4; }
        else if (fibres > 4.7) { pts = 5; }

        return pts;
    }



    calcul_proteines = (prot) => {
        var proteines = prot;
        var pts = 0;



        if (proteines <= 1.6) { pts = 0; }
        else if (proteines <= 3.2) { pts = 1; }
        else if (proteines <= 4.8) { pts = 2; }
        else if (proteines <= 6.4) { pts = 3; }
        else if (proteines <= 8) { pts = 4; }
        else if (proteines > 8) { pts = 5; }

        return pts;
    }


    calcul_sodium = (sod) => {
        var sodium = sod * 400;
        var pts = 0;

        if (sodium <= 90) { pts = 0; }
        else if (sodium <= 180) { pts = 1; }
        else if (sodium <= 270) { pts = 2; }
        else if (sodium <= 360) { pts = 3; }
        else if (sodium <= 450) { pts = 4; }
        else if (sodium <= 540) { pts = 5; }
        else if (sodium <= 630) { pts = 6; }
        else if (sodium <= 720) { pts = 7; }
        else if (sodium <= 810) { pts = 8; }
        else if (sodium <= 900) { pts = 9; }
        else if (sodium > 900) { pts = 10; }

        return pts;
    }


    // Calculez le total des ingrédients représentant des fruits, légumes, ou noix dans la liste d'ingrédients.
    // Par exemple, si la liste indique « Eau, courgettes (30 %), tomates (20 %) », alors le total est de 30 % + 20 % = 50 %.

    // Il existe une exception pour les concentrés de tomates et les fruits secs ou semi-hydratés, qui doivent compter double (y compris pour les concentrés triples). Afin de calculer le pourcentage, il faut donc multiplier leur quantité « q » par deux, tout en divisant rajoutant cette quantité q au dénominateur, c'est à dire diviser le tout par 100 + q.

    // Ainsi, pour une liste comportant 20% de fruits et 15% de raisins secs, le calcul est le suivant : 
    // (20 + (2×15)) / (100 + 15) = 50/115 = 43,5 %, à comparer aux 35 % si ce facteur n'était pas appliqué.

    // fruits param = fruits-vegetables-nuts_100g_estimate

    calcul_fruits = (fruits, mode) => {
        var fruits = fruits;
        var pts = 0;

        if (mode == "boissons") {
            if (fruits <= 40) { pts = 0; }
            else if (fruits <= 60) { pts = 2; }
            else if (fruits <= 80) { pts = 4; }
            else if (fruits > 80) { pts = 10; }
        }
        else { // autres cas
            if (fruits <= 40) { pts = 0; }
            else if (fruits <= 60) { pts = 1; }
            else if (fruits <= 80) { pts = 2; }
            else if (fruits > 80) { pts = 5; }
        }
        return pts;
    }



    /* Calcul du total des points négatifs après la mise à jour d'un champ correspondant */
    calcul_points_negatifs = (enrgy, sod, acides_gras_satures, matieres_grasses, sugar, mode) => {
        var energie_pts = parseInt(this.calcul_energie(enrgy, mode));
        var acides_gras_satures_pts = 0;
        if (mode == "matieres_grasses") {
            acides_gras_satures_pts = parseInt(this.calcul_acides_gras_satures(acides_gras_satures, matieres_grasses, "matieres_grasses"));
        }
        else {
            acides_gras_satures_pts = parseInt(this.calcul_acides_gras_satures(acides_gras_satures, matieres_grasses, "No_MG"));
        }
        var sucres_pts = parseInt(this.calcul_sucres(sugar, mode));
        var sodium_pts = parseInt(this.calcul_sodium(sod, mode));
        var pts;

        if (mode != "eau") {
            pts = energie_pts + acides_gras_satures_pts + sucres_pts + sodium_pts;
        }
        else { // eau
            pts = "-";
        }

        return pts;
    }

    /* Calcul du total des points positifs après la mise à jour d'un champ correspondant */
    calcul_points_positifs = (fibres, prot, fruit, mode) => {
        var fibres = parseInt(this.calcul_fibres(fibres));
        var proteines = parseInt(this.calcul_proteines(prot));
        var fruits = parseInt(this.calcul_fruits(fruit, mode));
        var pts;

        if (mode != "eau") {
            pts = fibres + proteines + fruits;
        }
        else { // eau
            pts = "-";
        }
        return pts;

    }





    calcul_score_nutritionnel = (enrgy, sod, acides_gras_satures, matieres_grasses, sugar, fibres, prot, fruit, mode) => {
        var positifs = parseInt(this.calcul_points_positifs(fibres, prot, fruit, mode));
        var negatifs = parseInt(this.calcul_points_negatifs(enrgy, sod, acides_gras_satures, matieres_grasses, sugar, mode));
        var score = 0;

        var fibres = parseInt(this.calcul_fibres(fibres));
        var proteines = parseInt(this.calcul_proteines(prot));
        var fruits = parseInt(this.calcul_fruits(fruit, mode));

        if (mode != "eau") {
            if (negatifs >= 11 && mode != "fromages" && fruits < 5) {
                // les points positifs des protéines ne sont pas pris en compte
                score = negatifs - fibres - fruits;
            }
            else {  // négatifs < 11 ou mode == "fromages" ou fruits = 5
                // tous les points positifs sont pris en compte
                score = negatifs - positifs;
            }
        }
        else { // eau
            score = "-";
        }

        return score;
    }


    /* Calcul du Nutriscore à partir du score nutritionnel et de la catégorie */
    calcul_nutriscore = (enrgy, sod, acides_gras_satures, matieres_grasses, sugar, fibres, prot, fruit, mode) => {
        var score = parseInt(this.calcul_score_nutritionnel(enrgy, sod, acides_gras_satures, matieres_grasses, sugar, fibres, prot, fruit, mode));
        var nutriscore = "-"

        if (mode == "boissons") {
            if (score <= 1) { nutriscore = "B"; }
            else if (score <= 5) { nutriscore = "C"; }
            else if (score <= 9) { nutriscore = "D"; }
            else { nutriscore = "E"; }
        }
        else if (mode == "eau") {
            nutriscore = "A";
        }
        else { // général, matières grasses et fromages
            if (score <= -1) { nutriscore = "A"; }
            else if (score <= 2) { nutriscore = "B"; }
            else if (score <= 10) { nutriscore = "C"; }
            else if (score <= 18) { nutriscore = "D"; }
            else { nutriscore = "E"; }
        }

        return nutriscore;
    }


    nutriscoreIcons(energy, sod, saturatedFat, fat, sugar, fibre, prot, fruit, mode) {

        let nutriscoreIcons = this.calcul_nutriscore(energy, sod, saturatedFat, fat, sugar, fibre, prot, fruit, mode);

        if (nutriscoreIcons == "A") return <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor:'#0F9246', width: 200, height: 60 }}><Text style={{
            fontSize: 20,
            fontWeight: 'bold', color: '#ffffff'
        }}>Excelent</Text></View>
        else
            if (nutriscoreIcons == "B") return <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#7DBB42', width: 200, height: 60 }}><Text style={{
                fontSize: 20,
                fontWeight: 'bold', color: '#ffffff'
            }}>Good</Text></View>
            else
                if (nutriscoreIcons == "C") return <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#FECC09', width: 200, height: 60 }}><Text style={{
                    fontSize: 20,
                    fontWeight: 'bold', color: '#ffffff'
                }}>Fair</Text></View>
                else
                    if (nutriscoreIcons == "D") return <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#F68E1F', width: 200, height: 60 }}><Text style={{
                        fontSize: 20,
                        fontWeight: 'bold', color: '#ffffff'
                    }}>Bad</Text></View>
                    else
                        if (nutriscoreIcons == "E") return <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#BC2026', width: 200, height: 60 }}><Text style={{
                            fontSize: 20,
                            fontWeight: 'bold', color: '#ffffff'
                        }}>Very Bad</Text></View>




    }


    render() {
        return (
            <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>

                {this.nutriscoreIcons(this.props.energy, this.props.sod, this.props.saturatedFat, this.props.fat, this.props.sugar, this.props.fibre, this.props.prot, this.props.fruit, this.props.mode)}

            </View>
        );
    }
}

export default ScoreEmoji;

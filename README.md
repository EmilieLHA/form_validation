# Validation de fomulaire

La partie Html CSS est assez basique, avec un formulaire écrit à l'aide de Bootstrap.

## Partie JS
### Les regex

J'ai effectué la validation de l'emal à l'aide d'un Regex.
J'ai trouvé en ligne cette super présentation qui les explique en détail, https://slides.com/emazerty/les-regex et un site pour tester: https://regex101.com/

Pour l'email c'est assez intuitif.
Pour le mot de passe c'était plus compliqué. Je suis passée par 4 Regex pour valider la présence d'une lettre, d'un symbôle et d'un chiffre et la longueur suffisante du mot de passe.

La méthode .match permet de vérifier le respect des règles fixées.

On itère ensuite dans un objet validation pour vérifier que tous les critères sont respectés et on affiche ou nom le message de validation.



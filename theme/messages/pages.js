module.exports = {
  name: 'Pages Messages',
  themePagesMessages: {
    docs: {
      initial: 'Documentation',
    },
    tutos: {
      initial: 'Tutoriels',
    },
    guides: {
      initial: 'Guides & Références',
    },
    help: {
      initial: {
        title: 'Assistance',
        description: 'Vous avez besoins d’aide ?',
      },
      faq_section: {
        heading: {
          title: 'FAQ',
          description: 'Voici les questions les plus réccurentes',
        },
      },
    },
    dashboard: {
      application: {
        create: {
          title: 'Creer une nouvelle application',
        },
        update: {
          title: 'Modifier une application',
          description:
            'Les nouveaux produits inclus ne seront pas automatiquement approuvés et seront en attente.',
        },
      },
      developer: {},
    },
    ctaMessage: 'Voir tout',
    detailsApp: {
      title: 'Liste des APIs disponibles',
      desc: "Voici la liste des APIs, regrouper par catégorie qu'Orange offre à ces partenaires. Vous pouvez choisir les APIs dont vous avez besoin pour votre application.",
      alert: {
        alertTitle: 'Alert',
        description:
          'Votre profil actuel ne peut créer que des applications tests. Merci de cliquer sur ajouter un contrat pour activer votre compte en completant les informations sur votre entreprise',
        confirmMessage:
          'Êtes-vous sûr de vouloir basculer cette application en production ?',
        buttons: {
          ignore: {
            text: 'Ignorer',
            variant: 'outline',
          },
          addContrat: {
            text: 'Ajouter un contrat',
            bgColor: '#EE8131',
            color: 'white',
          },
          confirm: {
            text: 'Confirmer',
            bgColor: '#EE8131',
            color: 'white',
          },
        },
      },
      buttonText: {
        modify: {
          text: "Modifier l'application",
          bgColor: '#EE8131',
          color: 'white',
        },
        delBtn: {
          bgColor: '#D9D9D9',
          color: 'black',
        },
        del: 'Supprimer',
        revoke: 'Révoquer',
      },
    },
  },
};

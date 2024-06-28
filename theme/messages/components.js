module.exports = {
  name: "Components Messages",
  themeComponentsMessages: {
    header: {
      sitename: "API",
    },
    tuto: {
      title: "Tutoriels",
    },
    reporting: {
      ticket: {
        heading: "ID: ",
        sections: {
          summary: {
            title: "Summary",
            message:
              "{transaction_type} of {amount} XOF by {sender} to be received on {receiver} via the {operation} channel",
          },
          overview: {
            title: "Overview",
            message:
              "Transaction initiated on {created_at} and was last updated on {last_updated_at}",
          },
          analysis: {
            title: "Analysis",
            message: "no further analysis",
          },
        },
      },
    },
    paths: {
      home: "Accueil",
      offers: "Offres",
      api: "APis",
      doc: "Documentation",
    },
    credentials: {
      login: "Mon espace perso",
      logout: "Déconnexion",
      register: "Inscription",
    },
    account: {
      title: "Vous êtes intéressés ?",
      cta: { message: "Créer un compte gratuitement", link: "#" },
    },
    notFound: {
      message: "Vous vous êtes trompé de chemin :(",
      cta: "Retourner à l'accueil",
      component: {
        message: "Pas de contenu :(",
        cta: "Retourner ",
      },
    },
    dashboard: {
      forms: {
        success: { message: "Modification réussie !" },
      },
    },
  },
};

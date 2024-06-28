module.exports = {
  name: 'Theming forms files',
  themeForms: {
    inputs: {
      loadingText: 'Processing...',
      search: {
        keyword: {
          uid: 'keyword',
          placeholder: 'Recherchez ici',
        },
        submit: {
          uid: 'searchSubmition',
          submit_message: 'Recherchez',
        },
      },
      newsletter: {
        mail: {
          uid: 'mail',
          label: 'Newsletter',
          placeholder: 'Votre adresse E-mail',
          type: 'email',
        },
        submit: {
          uid: 'newsSubmition',
          submit_message: "S'inscrire",
        },
      },
      auth: {
        login: {
          identifier: {
            uid: 'identifier',
            label: 'Identifiant',
            placeholder: 'Tapez votre identifiant',
          },
          password: {
            uid: 'password',
            label: 'Mot de passe',
            placeholder: '****************',
            password: true,
            secureTextEntry: true,
          },
          submit: {
            uid: 'authentication',
            submit_message: 'Je me connecte',
          },
        },
        register: {
          entreprise: {
            uid: 'entreprise',
            label: "Nom de l'entreprise",
            placeholder: 'Tapez le nom de votre entreprise',
          },
          email: {
            uid: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'Tapez votre email',
          },
          password: {
            uid: 'password',
            label: 'Mot de passe',
            placeholder: '****************',
            password: true,
            secureTextEntry: true,
          },
          confirmPassword: {
            uid: 'confirmPassword',
            label: 'Confirmation Mot de passe',
            placeholder: '****************',
            password: true,
            secureTextEntry: true,
          },
          submit: {
            uid: 'registration',
            submit_message: "Je m'inscris",
          },
        },
        reset_password: {
          email: {
            uid: 'email',
            label: 'Email',
            placeholder: 'Tapez le nom de votre email',
          },
          otp: {
            uid: 'otp',
            type: 'otp',
            label: 'Code OTP',
            placeholder: 'Tapez le code OTP',
          },
          password: {
            uid: 'password',
            label: 'Mot de passe',
            placeholder: '****************',
            password: true,
            secureTextEntry: true,
          },
          confirmPassword: {
            uid: 'confirmPassword',
            label: 'Confirmation Mot de passe',
            placeholder: '****************',
            password: true,
            secureTextEntry: true,
          },
          submit: {
            uid: 'resetPassword',
            submit_message: 'Réinitialiser',
          },
        },
        forgot_password: {
          identifier: {
            uid: 'identifier',
            label: 'Email',
            placeholder: 'Tapez votre identifiant ou email',
          },
          submit: {
            uid: 'resetRequest',
            submit_message: 'Envoyer',
          },
        },
      },
      profil: {
        account: {
          firstName: {
            uid: 'firstName',
            label: 'Prénom',
            placeholder: 'Votre Prénom',
          },
          lastName: {
            uid: 'lastName',
            label: 'Nom ',
            placeholder: 'votre Nom',
          },

          email: {
            uid: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'Tapez votre email',
          },

          submit: {
            uid: 'updateAccount',
            submit_message: 'Mettre à jour',
          },
        },
        password: {
          password: {
            uid: 'password',
            label: 'Mot de passe',
            placeholder: '****************',
            password: true,
            secureTextEntry: true,
          },
          confirmPassword: {
            uid: 'confirmPassword',
            label: 'Confirmation Mot de passe',
            placeholder: '****************',
            password: true,
            secureTextEntry: true,
          },
          submit: {
            uid: 'updatePassword',
            submit_message: 'Mettre à jour',
          },
        },
        entreprise: {
          infos: {
            name: {
              uid: 'name',
              label: 'Nom de l’entreprise *',
              placeholder: 'Business',
            },
            secteur: {
              uid: 'secteur',
              label: 'Secteur d’activité ',
              type: 'select',
              placeholder: 'Sélectionner',
              options: [],
            },
            autreSecteur: {
              uid: 'autreSecteur',
              label: "Autre secteur d'activité",
              placeholder: "Autre secteur d'activité",
            },
            type: {
              uid: 'type',
              type: 'select',
              label: "Type d'entreprise ",
              placeholder: 'Sélectionner  ',
              options: [
                { name: 'sa', value: 'SA' },
                { name: 'sarl', value: 'SARL' },
                { name: 'individuelle', value: 'Entreprise Individuelle' },
                { name: 'scs', value: 'SCS' },
                { name: 'snc', value: 'SNC' },
                { name: 'gie', value: 'GIE' },
              ],
            },
            siege: {
              uid: 'siege',
              label: 'Siège social',
              placeholder: 'L’adresse de l’entreprise ...',
            },
            msisdn: {
              uid: 'msisdn',
              label: 'Numéro de contact',
              placeholder: 'Numéro de téléphone de l’entreprise',
            },
            desc: {
              uid: 'desc',
              label: "Description de l'activité (Marchand uniquement)",
              type: 'textArea',
              placeholder: 'Mettez le description de la demande ici...',
            },

            logo: {
              uid: 'files',
              type: 'dropzone',
              label: 'Logotype (facultatif)',
            },

            submit: {
              uid: 'updateEntreprise',
              submit_message: 'Sauvegarder',
            },
          },
          docs: {
            cni: {
              uid: 'cni',
              type: 'cni',
              label: 'CNI/Passeport DG',
            },
            ninea: {
              uid: 'ninea',
              type: 'ninea',
              label: 'NINEA',
            },
            rib: {
              uid: 'rib',
              type: 'rib',
              label: 'RIB',
            },
            rccm: {
              uid: 'rccm',
              type: 'rccm',
              label: 'RCCM',
            },
            contract: {
              uid: 'contract',
              type: 'contract',
              label: 'Contrat Signé',
            },
            dilligence: {
              uid: 'dilligence',
              type: 'dilligence',
              label: 'Fiche de due diligence',
            },
            submit: {
              uid: 'updateDocsEntreprise',
              submit_message: 'Ajouter',
            },
          },
        },
      },
      applications: {
        name: {
          uid: 'name',
          type: 'text',
          label: "Nom de l'application",
          placeholder: "Le nom de l'application",
        },
        category: {
          uid: 'category',
          type: 'select',
          label: 'Catégorie',
          placeholder: 'Sélectionner une catégorie... ',
          options: [
            { name: 'sandbox', value: 'sandbox' },
            { name: 'prod', value: 'prod' },
          ],
        },
        files: {
          uid: 'files',
          type: 'dropzone',
          label: 'Logo',
        },
        fileName: {
          uid: 'fileName',
          type: 'hidden',
        },
        fileType: {
          uid: 'fileType',
          type: 'hidden',
        },
        description: {
          uid: 'description',
          type: 'textArea',
          label: 'Description',
          placeholder: "Mettez la description de l'application",
        },
        apis: {
          uid: 'apis',
          type: 'checkbox',
          label: '',
          options: [{ name: 'oauth', value: 'oauth' }],
        },
        submit: {
          uid: 'create_app',
          submit_message: "Créer l'Application",
        },
        update: {
          uid: 'update_app',
          submit_message: "Modifier l'Application",
        },
      },
    },
    messages: {
      infos: {
        auth: {
          message: "J'ai déja un compte",
        },
        forgot_password: {
          heading:
            'Vous avez oublié votre mot de passe ?\nMettez votre adresse email et nous nous enverrons un code de connexion',
          message: "J'ai oublié mon mot de passe",
          goBack: 'Retour',
        },
        create_account: {
          about_entreprise: "À propos de l'entreprise",
          about_you: 'À propos de vous',
          message: "Je n'ai pas encore de compte, je veux m'inscrire",
          highlight: "je veux m'inscrire",
        },
        create_app: {
          heading: 'Liste des APIs disponibles',
          message:
            "Voici la liste des APIs, regrouper par categorie qu'Orange offre à ses partenaires. Vous pouvez choisir les APIs dont vous avez besoin pour votre application",
        },
        dashboard: { nextStep: 'Suivant' },
      },
      errors: {
        auth: {
          login: {
            not_authorized: 'Identifiant ou Mot de passe invalide',
          },
          register: {
            not_authorized: 'Ce compte existe déjà',
            error_password: 'Format mot de passe invalide',
            large: 'Fichier trop Volumineux',
            not_authenticated: "Erreur d'authentification",
            problem: "Un problème est survenue lors de l'envoi",
          },
          forgot_pass: {
            not_authorized: "Cet utilisateur n'existe pas ",
            problem: "Un problème est survenue lors de l'envoie",
          },
          reset_pass: {
            not_authorized: 'Code OTP ou Email invalide',
          },
        },
        application: {
          app_exists: '{entry_message} already exist',
          problem: 'A problem has occured whilts creating the application',
        },
      },
    },
  },
};

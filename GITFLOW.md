# Git Flow & CI/CD - Documentation

## 📋 Vue d'ensemble

Ce projet utilise **Git Flow** pour la gestion des branches et **GitHub Actions** pour l'intégration continue (CI) et le déploiement continu (CD).

## 🌳 Structure des branches

### Branches principales

| Branche   | Rôle                     | Stable ? |
| --------- | ------------------------ | -------- |
| `main`    | Code en production       | ✅ Oui   |
| `develop` | Version en développement | ⚠️ Non   |

### Branches temporaires

| Type        | Origine   | Destination        | Exemple                   |
| ----------- | --------- | ------------------ | ------------------------- |
| `feature/*` | `develop` | `develop`          | `feature/42-contact-page` |
| `release/*` | `develop` | `main` + `develop` | `release/1.0.0`           |
| `hotfix/*`  | `main`    | `main` + `develop` | `hotfix/critical-bug`     |

## 🔄 Workflow Git Flow

### 1. Créer une nouvelle fonctionnalité

```bash
# Créer une issue sur GitHub (ex: #42)
# Créer la branche feature depuis develop
git checkout develop
git pull origin develop
git checkout -b feature/42-contact-page

# Développer + commits
git add .
git commit -m "feat: add contact page structure (#42)"
git commit -m "feat: add contact form validation (#42)"

# Pousser vers le dépôt distant
git push origin feature/42-contact-page
```

### 2. Créer une Pull Request

1. Aller sur GitHub
2. Créer une PR de `feature/42-contact-page` vers `develop`
3. La CI s'exécute automatiquement
4. Attendre la validation de l'équipe
5. Merger si tout est vert ✅

### 3. Préparer une release

```bash
# Créer une branche release depuis develop
git checkout develop
git pull origin develop
git checkout -b release/1.0.0

# Corrections finales uniquement
git commit -m "chore: update version to 1.0.0"

# Merger dans main
git checkout main
git merge --no-ff release/1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags

# Merger dans develop
git checkout develop
git merge --no-ff release/1.0.0
git push origin develop

# Supprimer la branche release
git branch -d release/1.0.0
git push origin --delete release/1.0.0
```

### 4. Hotfix urgent (production)

```bash
# Créer depuis main
git checkout main
git pull origin main
git checkout -b hotfix/critical-security-fix

# Corriger le bug
git commit -m "fix: critical security vulnerability (#123)"

# Merger dans main
git checkout main
git merge --no-ff hotfix/critical-security-fix
git tag -a v1.0.1 -m "Hotfix 1.0.1"
git push origin main --tags

# Merger dans develop
git checkout develop
git merge --no-ff hotfix/critical-security-fix
git push origin develop

# Supprimer la branche hotfix
git branch -d hotfix/critical-security-fix
```

## 🚀 Pipelines CI/CD

### CI - Intégration Continue (`ci.yml`)

**Déclenchement** : Sur tous les push et pull requests

**Jobs** :

1. **Linting** : Vérification du code avec ESLint
2. **Build** : Compilation de l'application Next.js
3. **Tests** : Exécution des tests (si présents)
4. **Summary** : Résumé du statut de la CI

**Fichier** : `.github/workflows/ci.yml`

### CD - Déploiement Continu (`deploy.yml`)

**Déclenchement** : Uniquement sur push vers `main`

**Jobs** :

1. **Verify CI** : Vérifie que le code compile et passe le linting
2. **Deploy** : Déploiement avec Ansible sur le serveur de production

**Fichier** : `.github/workflows/deploy.yml`

## 📝 Conventions de commit

Suivre la convention **Conventional Commits** :

```
<type>(<scope>): <description> (#issue)

[corps optionnel]

[pied de page optionnel]
```

### Types de commits

| Type       | Description                          |
| ---------- | ------------------------------------ |
| `feat`     | Nouvelle fonctionnalité              |
| `fix`      | Correction de bug                    |
| `docs`     | Documentation                        |
| `style`    | Formatage, pas de changement de code |
| `refactor` | Refactoring du code                  |
| `test`     | Ajout ou modification de tests       |
| `chore`    | Maintenance, configuration           |

### Exemples

```bash
feat: add user authentication (#42)
fix: resolve login redirect issue (#43)
docs: update API documentation
refactor: simplify validation logic
test: add unit tests for auth module
chore: update dependencies
```

## ✅ Bonnes pratiques

1. **Commits fréquents et petits** : Facilite la revue de code
2. **Une fonctionnalité = une branche** : Isolation des changements
3. **Toujours vérifier la CI** : Ne jamais merger si la CI échoue ❌
4. **Ne jamais désactiver les tests** : Qualité avant vitesse
5. **Pull requests obligatoires** : Revue de code par les pairs
6. **Lier commits aux issues** : Traçabilité (#42)

## 🛠️ Scripts disponibles

```bash
npm run dev      # Lancer en mode développement
npm run build    # Compiler l'application
npm run start    # Lancer en production
npm run lint     # Vérifier le code avec ESLint
```

## 🔗 Ressources

- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Next.js Documentation](https://nextjs.org/docs)

---

**Dernière mise à jour** : 2026-01-13

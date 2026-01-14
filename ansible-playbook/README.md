# Ansible Playbooks - Déploiement Next.js

## 📋 Fichiers

- **`deploy.yml`** : Playbook de déploiement complet
- **`cleanup.yml`** : Playbook de nettoyage (arrêt des processus)
- **`inventory.ini`** : Configuration du serveur

## 🚀 Déploiement

### Depuis GitHub Actions (automatique)

Le déploiement se fait automatiquement lors d'un push sur `main`.

### Déploiement manuel

```bash
ansible-playbook -i ansible-playbook/inventory.ini ansible-playbook/deploy.yml
```

## 🧹 Nettoyer le serveur

Si vous avez une erreur "port 3000 already in use", utilisez le playbook de nettoyage :

```bash
ansible-playbook -i ansible-playbook/inventory.ini ansible-playbook/cleanup.yml
```

### Commandes manuelles sur le serveur

Se connecter au serveur :

```bash
ssh -i ~/.ssh/gcp_nextjs user@34.39.56.246
```

#### Voir les processus PM2

```bash
pm2 list
pm2 status
```

#### Arrêter l'application

```bash
pm2 stop test-ansible-nextjs
pm2 delete test-ansible-nextjs
```

#### Arrêter tous les processus PM2

```bash
pm2 delete all
```

#### Voir les processus sur le port 3000

```bash
lsof -i :3000
netstat -tuln | grep 3000
```

#### Tuer les processus sur le port 3000

```bash
sudo lsof -ti:3000 | xargs kill -9
```

#### Tuer tous les processus Node.js

```bash
sudo killall node
```

#### Redémarrer PM2

```bash
pm2 flush
pm2 save --force
pm2 restart all
```

## 🔍 Vérifier l'état de l'application

### Sur le serveur

```bash
# Logs de l'application
pm2 logs test-ansible-nextjs

# Logs en temps réel
pm2 logs test-ansible-nextjs --lines 100

# Statut de l'application
pm2 status

# Informations détaillées
pm2 info test-ansible-nextjs
```

### Depuis votre navigateur

Accédez à : http://34.39.56.246:3000

## ⚠️ Problèmes courants

### Port 3000 déjà utilisé

**Solution** : Exécutez le playbook de nettoyage

```bash
ansible-playbook -i ansible-playbook/inventory.ini ansible-playbook/cleanup.yml
```

### L'application ne démarre pas

1. Vérifiez les logs :

   ```bash
   ssh user@34.39.56.246 "pm2 logs test-ansible-nextjs --lines 50"
   ```

2. Vérifiez que Node.js est installé :

   ```bash
   ssh user@34.39.56.246 "node --version"
   ```

3. Vérifiez que le build existe :
   ```bash
   ssh user@34.39.56.246 "ls -la /home/user/test-ansible-nextjs/.next"
   ```

### Erreur 500 Internal Server Error

1. Nettoyez le serveur avec `cleanup.yml`
2. Redéployez avec `deploy.yml`
3. Vérifiez les logs PM2

## 📝 Configuration

### inventory.ini

```ini
[webserver]
34.39.56.246

[webserver:vars]
ansible_user=user
ansible_ssh_private_key_file=~/.ssh/gcp_nextjs
ansible_python_interpreter=/usr/bin/python3
```

### Changer l'utilisateur ou le serveur

Modifiez `inventory.ini` avec vos propres valeurs.

## 🔐 Secrets GitHub

Pour que le déploiement automatique fonctionne, configurez le secret dans GitHub :

1. Allez dans **Settings** → **Secrets and variables** → **Actions**
2. Créez un secret nommé `SSH_PRIVATE_KEY`
3. Collez le contenu de votre clé privée SSH

## 📚 Ressources

- [Ansible Documentation](https://docs.ansible.com/)
- [PM2 Documentation](https://pm2.keymetrics.io/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

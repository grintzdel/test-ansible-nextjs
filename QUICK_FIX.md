# 🚨 FIX RAPIDE - Erreur 500 / Port 3000 déjà utilisé

## ✅ SOLUTION IMMÉDIATE

### Option 1 : Nettoyer avec Ansible (Recommandé)

```bash
# 1. Nettoyer le serveur
ansible-playbook -i ansible-playbook/inventory.ini ansible-playbook/cleanup.yml

# 2. Merger develop dans main pour déployer la correction
git checkout main
git merge develop
git push origin main
```

Le déploiement automatique va se lancer avec le nouveau playbook qui utilise PM2.

---

### Option 2 : Nettoyer manuellement sur le serveur

```bash
# Se connecter au serveur
ssh -i ~/.ssh/gcp_nextjs user@34.39.56.246

# Une fois connecté, exécutez ces commandes :

# Arrêter tous les processus PM2
pm2 delete all

# Tuer tous les processus Node.js
sudo killall node

# Tuer les processus sur le port 3000
sudo lsof -ti:3000 | xargs kill -9

# Vérifier que le port est libre
netstat -tuln | grep 3000

# Si rien n'apparaît, le port est libre !

# Déconnexion
exit
```

Ensuite, redéployez en mergeant develop dans main.

---

## 🔍 Vérifier que c'est corrigé

Après le déploiement, vérifiez :

```bash
# Voir les logs PM2 en direct
ssh -i ~/.ssh/gcp_nextjs user@34.39.56.246 "pm2 logs test-ansible-nextjs --lines 50"

# Vérifier le statut
ssh -i ~/.ssh/gcp_nextjs user@34.39.56.246 "pm2 status"
```

Puis testez dans votre navigateur : http://34.39.56.246:3000

---

## 📋 Ce qui a été corrigé

Le nouveau playbook `ansible-playbook/deploy.yml` :
- ✅ Installe PM2
- ✅ Arrête les anciens processus avant de déployer
- ✅ Tue les processus sur le port 3000
- ✅ Lance l'app avec PM2 (processus persistant)
- ✅ Configure PM2 pour démarrer au boot

---

## ⚠️ Si ça ne fonctionne toujours pas

1. Vérifiez les logs GitHub Actions :
   https://github.com/grintzdel/test-ansible-nextjs/actions

2. Vérifiez que le secret SSH_PRIVATE_KEY est bien configuré dans GitHub

3. Connectez-vous au serveur et vérifiez :
   ```bash
   ssh -i ~/.ssh/gcp_nextjs user@34.39.56.246

   # Vérifier Node.js
   node --version

   # Vérifier PM2
   pm2 --version

   # Vérifier le dossier de l'app
   ls -la /home/user/test-ansible-nextjs

   # Vérifier le build
   ls -la /home/user/test-ansible-nextjs/.next
   ```

4. Si tout est présent mais ne démarre pas, essayez manuellement :
   ```bash
   cd /home/user/test-ansible-nextjs
   pm2 start npm --name test-ansible-nextjs -- start
   pm2 logs test-ansible-nextjs
   ```

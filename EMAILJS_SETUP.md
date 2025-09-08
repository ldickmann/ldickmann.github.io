# 📧 Configuração do Sistema de Contato

Este projeto utiliza o **EmailJS** para envio de emails do formulário de contato. Siga as instruções abaixo para configurar:

## 🚀 Como Configurar o EmailJS

### 1. Criar uma conta no EmailJS
1. Acesse [emailjs.com](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Faça login no painel

### 2. Criar um Serviço de Email
1. No painel, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. **Anote o SERVICE_ID** gerado

### 3. Criar um Template de Email
1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Use este modelo de template:

**Subject:** Nova mensagem do portfólio - {{from_name}}

**Content:**
```
Você recebeu uma nova mensagem através do seu portfólio!

Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do seu portfólio.
```

4. **Anote o TEMPLATE_ID** gerado

### 4. Obter a Public Key
1. Vá em **Account** > **General**
2. **Anote sua PUBLIC_KEY**

### 5. Configurar as Variáveis de Ambiente
1. Abra o arquivo `.env.local` na raiz do projeto
2. Substitua os valores pelos seus dados do EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

### 6. Testar o Formulário
1. Execute o projeto: `npm run dev`
2. Acesse a seção de contato
3. Preencha e envie uma mensagem de teste
4. Verifique se o email chegou na sua caixa de entrada

## 🔧 Configurações Adicionais

### Personalizar o Email de Destino
Por padrão, as mensagens são enviadas para `ldickmann12@gmail.com`. Para alterar:

1. Edite o arquivo `src/config/emailConfig.js`
2. Altere a propriedade `TO_EMAIL`:

```javascript
TO_EMAIL: 'seu_email@gmail.com',
```

### Limite de Emails
- **Plano Gratuito:** 200 emails/mês
- Para mais emails, considere upgrader para o plano pago

## 🛡️ Segurança

- As chaves públicas do EmailJS são seguras para usar no frontend
- Nunca exponha suas chaves privadas
- O arquivo `.env.local` não deve ser commitado no Git

## 🐛 Solução de Problemas

### "Configurações do EmailJS não encontradas"
- Verifique se o arquivo `.env.local` existe
- Confirme se as variáveis estão corretas
- Reinicie o servidor de desenvolvimento

### "Erro 403 - Forbidden"
- Verifique se o serviço EmailJS está ativo
- Confirme se as credenciais estão corretas
- Verifique se não atingiu o limite de emails

### Emails não chegam
- Verifique a pasta de spam
- Confirme se o template está correto
- Teste com um email diferente

## 📞 Suporte

Se tiver problemas, consulte a [documentação oficial do EmailJS](https://www.emailjs.com/docs/).

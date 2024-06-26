# Archer C25 OPENWRT para stock

A forma mais fácil de retornar ao stock é via recovery que também serve para dar unbrick. Se você estiver desesperado, pode tentar esse tutorial em seu roteador tp-link para ver se consegue

# Arquivos

[TFTP (baixe a versão portátil)](https://tftpd32.jounin.net/tftpd32_download.html)

[Firmware stock](https://www.tp-link.com/en/support/download/archer-c25/v1/#Firmware)

## Preparando

 1. Extraia o Tftpd em uma pasta
 2. Extraia o firmware (provavelmente *ArcherC25v1_un-up-ver1-0-0-P1[20160725-rel77078].bin*) na pasta do Tftpd
 3. Renomeie o firmware para **ArcherC25v1_recovery.bin**
 4. Desative todos os firewalls
 5. Saia ou desative a rede wifi e acesse o roteador via **LAN**
 ![tfpd e firmware na mesma pasta](https://i.imgur.com/OOT9Cmf.png)


## Mudando a rede interna

No adaptador da sua placa **LAN** edite o protocolo ipv4 e mude para o ip estático 192.168.0.66
![Exemplo ipv4](https://i.imgur.com/FUyG57m.png)

## O procedimento de reset

Abra o **Tftpd** e verifique duas coisas:

 1. Verifique se o endereço em **Current Directory** é a pasta onde está o **ArcherC25v1_recovery.bin** e clique em **Show Dir** e veja se o arquivo também está lá dentro
 2. Verifique se em **Server Interfaces** em alguns dos items está o endereço 192.168.0.66 . Se não estiver você falhou na etapa [Mudando a rede interna](#mudando-a-rede-interna)

Agora com o roteador **desligado**, mantenha o botão de reset pressionado enquanto liga o roteador. Se deu certo o ícone de cadeado verde vai acender, com isso você pode soltar o botão de reset do roteador

No **Tftpd**  em algum momento o roteador irá acessar via tftp o ip 192.168.0.66 e requisitar o arquivo ArcherC25v1_recovery.bin

Irá aparecer um popup do **Tftpd** mostrando a barra de progresso de upload do arquivo e na aba **Log viewer** vai explicar o que está acontecendo

Depois que o arquivo subiu é só aguardar o roteador fazer a restauração do dispositivo

![Aba log viewer do Tftpd](https://i.imgur.com/93mvlfw.png)

## Acessando o roteador

Acesse [192.168.0.1](http://192.168.0.1) para acessar o roteador novamente.

[Volte para as configurações do adaptador](#mudando-a-rede-interna) e mude para obter o IP e DNS automaticamente 

Obs: Meu roteador resetou para o stock, mas recuperou as configurações antigas, então se você mudou o usuário e senha do painel do roteador, então pode ser necessário usar sua senha antiga e não a senha padrão de fábrica do roteador

## Tentando adaptar o tutorial para o seu roteador

Você pode tentar adaptar o tutorial para o seu rotador tp-link

 - Se não teve tentativa de acesso do rotador no modo recovery para 192.168.0.66 tente usar o IP 192.168.1.66 e então por consequência tentar acessar o painel web quando acabar a restauração em [192.168.1.1](http://192.168.1.1)
 - Verifique o **Log viewer** do **Tftpd** e veja qual o arquivo o roteador está tentando acessar, na imagem a baixo eu tinha colocado o nome errado para o arquivo e o **Log viewer** me mostrou qual o nome do arquivo que o roteador estava tentando acessar ![Aba log viewer do Tftpd](https://i.imgur.com/93mvlfw.png)



### Obrigado especial

Obrigado ao canal HomeTech no youtube pelo tutorial em que deu para se basear para eu fazer no meu Archer C25 https://youtu.be/-zMAxHw1CS8

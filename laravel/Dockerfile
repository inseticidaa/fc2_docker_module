FROM php:7.4-cli

WORKDIR /var/www

# Instaling Dependencies
RUN apt update \
    && apt install libzip-dev -y \
    && docker-php-ext-install zip

# Instaling php composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');"

# Creating a Laravel project
RUN php composer.phar create-project laravel/laravel laravel

# Starting Server
ENTRYPOINT [ "php", "laravel/artisan", "serve" ]
CMD [ "--host=0.0.0.0" ]

EXPOSE 8000
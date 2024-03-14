<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit8a69512bf0d921e8c847e11c29e30164
{
    public static $prefixLengthsPsr4 = array (
        'E' => 
        array (
            'Enable\\Cors\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Enable\\Cors\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Enable\\Cors\\AdminPage' => __DIR__ . '/../..' . '/src/AdminPage.php',
        'Enable\\Cors\\Helpers\\Headers' => __DIR__ . '/../..' . '/src/Helpers/Headers.php',
        'Enable\\Cors\\Helpers\\Htaccess' => __DIR__ . '/../..' . '/src/Helpers/Htaccess.php',
        'Enable\\Cors\\Helpers\\Option' => __DIR__ . '/../..' . '/src/Helpers/Option.php',
        'Enable\\Cors\\Plugin' => __DIR__ . '/../..' . '/src/Plugin.php',
        'Enable\\Cors\\SettingsApi' => __DIR__ . '/../..' . '/src/SettingsApi.php',
        'Enable\\Cors\\Traits\\Api' => __DIR__ . '/../..' . '/src/Traits/Api.php',
        'Enable\\Cors\\Traits\\Singleton' => __DIR__ . '/../..' . '/src/Traits/Singleton.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit8a69512bf0d921e8c847e11c29e30164::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit8a69512bf0d921e8c847e11c29e30164::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit8a69512bf0d921e8c847e11c29e30164::$classMap;

        }, null, ClassLoader::class);
    }
}

<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticIniteab003bc7637c4ec190c8b1b6faf3346
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'FAL\\Media_Popup' => __DIR__ . '/../..' . '/includes/modules/media-popup/class-media-popup.php',
        'FAL\\Notices' => __DIR__ . '/../..' . '/includes/class-notices.php',
        'FAL\\Page' => __DIR__ . '/../..' . '/includes/class-page.php',
        'FAL\\RestAPI' => __DIR__ . '/../..' . '/includes/class-rest-api.php',
        'FAL\\Surror\\Dashboard' => __DIR__ . '/../..' . '/surror/dashboard/dashboard/includes/class-dashboard.php',
        'FAL\\Surror\\Dashboard\\Base' => __DIR__ . '/../..' . '/surror/dashboard/dashboard/includes/class-base.php',
        'FAL\\Surror\\Notices' => __DIR__ . '/../..' . '/surror/dashboard/notices/includes/class-notices.php',
        'FAL\\Surror\\Notices\\Base' => __DIR__ . '/../..' . '/surror/dashboard/notices/includes/class-base.php',
        'FAL\\Track' => __DIR__ . '/../..' . '/includes/track/class-track.php',
        'FAL\\Track\\Permission' => __DIR__ . '/../..' . '/includes/track/class-permission.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticIniteab003bc7637c4ec190c8b1b6faf3346::$classMap;

        }, null, ClassLoader::class);
    }
}

<?php

namespace Screenfeed\AdminbarTools\Dependencies\League\Container\Definition;

use Screenfeed\AdminbarTools\Dependencies\League\Container\ImmutableContainerAwareInterface;

interface DefinitionFactoryInterface extends ImmutableContainerAwareInterface
{
    /**
     * Return a definition based on type of concrete.
     *
     * @param  string $alias
     * @param  mixed  $concrete
     * @return mixed
     */
    public function getDefinition($alias, $concrete);
}

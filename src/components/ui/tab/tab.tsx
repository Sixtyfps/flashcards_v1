import { ComponentPropsWithoutRef, ElementType } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'

import styles from './tab.module.scss'

export type TabProps<T extends ElementType = 'div'> = {} & ComponentPropsWithoutRef<T>

export const Tab = () => {
  return (
    <RadixTabs.Root className={styles.RadixTabsRoot}>
      <RadixTabs.List className={styles.RadixTabsList}>
        <RadixTabs.Trigger className={styles.RadixTabsTrigger} value={'tab1'}>
          Switch_1
        </RadixTabs.Trigger>

        <RadixTabs.Trigger className={styles.RadixTabsTrigger} value={'tab1'}>
          Switch_3
        </RadixTabs.Trigger>

        <RadixTabs.Trigger className={styles.RadixTabsTrigger} value={'tab2'}>
          Switch_4
        </RadixTabs.Trigger>
      </RadixTabs.List>
    </RadixTabs.Root>
  )
}

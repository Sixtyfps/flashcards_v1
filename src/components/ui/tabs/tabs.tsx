import * as RadixTabs from '@radix-ui/react-tabs'

import styles from './tabs.module.scss'

export type TabsProps = {}

// value
// onChange
//

export const Tabs = () => {
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

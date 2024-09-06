import Image from 'next/image';
import logoIcon from '../assets/coroa.svg';
import { ProfileButton } from './profile-button';
import { Slash } from 'lucide-react';
import { OrganizationSwitch } from './organization-switcher';
import { ability } from '@/auth/auth';
import { Separator } from './ui/separator';
import { ThemeSwitcher } from './theme/theme-switcher';


export async function Header() {
  const permissions = await ability()

  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={logoIcon} alt='logo' className='size-6 dark:invert' />

        <Slash className='size-3 -rotate-[24deg] text-border' />

        <OrganizationSwitch />

        {permissions?.can('get', 'Project') && <p>Projetos</p>}
      </div>

      <div className='flex items-center gap-4'>
        <ThemeSwitcher />
        <Separator orientation='vertical' className='h-5' />
        <ProfileButton />
      </div>
    </div>

  );
}

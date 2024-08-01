import styles from './SkillsStyles.module.css'
import SkillList from '../../common/SkillList'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMarkLight from '../../assets/checkmark-light.svg'
import { useTheme } from '../../common/ThemeContext'


function Skills() {

    const {theme} = useTheme()
    const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark

    return (
            <section id ="skills" className={styles.container}>
                <h1 className="sectionTitle" >Skills</h1>
                <div className={styles.skillList}>
                    <SkillList src={checkMarkIcon} skill="Python" />
                    <SkillList src={checkMarkIcon} skill="SQL" />
                    <SkillList src={checkMarkIcon} skill="C" />
                    <SkillList src={checkMarkIcon} skill="JavaScript" />
                    <SkillList src={checkMarkIcon} skill="CSS" />
                </div>
                <hr />
                <div className={styles.skillList}>
                    <SkillList src={checkMarkIcon} skill="React" />
                    <SkillList src={checkMarkIcon} skill="Flask" />
                    <SkillList src={checkMarkIcon} skill="Django" />
                    <SkillList src={checkMarkIcon} skill="ASP.NET" />
                    <SkillList src={checkMarkIcon} skill="MVC" />

                </div>
                <hr />
                <div className={styles.skillList}>
                    <SkillList src={checkMarkIcon} skill="Tableau" />
                    <SkillList src={checkMarkIcon} skill="Microsoft Excel" />
                    <SkillList src={checkMarkIcon} skill="Microsoft Word" />
                    <SkillList src={checkMarkIcon} skill="SSMS" />
                    <SkillList src={checkMarkIcon} skill="MySQL" />
                </div>
            </section>
        )   
}

export default Skills
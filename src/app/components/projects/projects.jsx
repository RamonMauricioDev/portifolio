//import { useState, useEffect } from "react";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import './projects.css';
import { db } from "@/config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Projects = () =>{

    const projectStyle = {
        width: "clamp(300px, 34vw, 600px)",
        height: "clamp(150px, 17vw, 300px)"
    }

    const projectDb = collection(db, "portifolio");
    const [projectList, setProjectList] = useState([]);
    useEffect(() => {
        const getProjectList = async () => {
            try {
                const data = await getDocs(projectDb)
                const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setProjectList(filteredData);
            } catch(err) {
                console.error(err);
            }
        };
        getProjectList();
    }, [])

    console.log(projectList)

    return(
        <div id="projects">
            <h2 className="project-title">Personal Projects</h2>
            <div className="want-to-see-more">
                <h5>Here are a few of my personal projects. Want to see more ?</h5>
                <h5><a href="#contact" className="primary-color">Email me.</a></h5>
            </div>
            <div className="project-flex">
            {projectList.map((project) =>
                <div key = {project.Image} style={{borderRadius: '15px', overflow: 'hidden'}}>
                    <a href={project.GithubProject} target="_blank">
                    <Image loader={() => project.Image} src = {project.Image} alt="Image" width={600} height={300} quality={100} style={projectStyle}/>
                    </a>
                </div>
            )}
            </div>
        </div>
    )
}

export default Projects
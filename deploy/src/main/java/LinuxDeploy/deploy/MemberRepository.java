package LinuxDeploy.deploy;

import LinuxDeploy.deploy.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,Long> {
}
